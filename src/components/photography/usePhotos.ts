import { useEffect, useState } from 'react';

// Photos live in a public GitHub repo. The repo's `npm run strip-exif` script cleans the photos and writes
// photos/manifest.json (sorted by capture time, with camera info and sizes), which is all this page downloads up front.
export const PHOTO_SOURCE = {
    owner: 'Deuos',
    repo: 'photography',
    path: 'photos',
    branch: 'main',
};

export interface Photo {
    name: string;
    url: string;
    takenAt: number | null;
    camera?: string;
    lens?: string;
    settings?: string;
    width: number;
    height: number;
}

type ManifestEntry = Omit<Photo, 'url'>;

const CACHE_KEY = 'photography-manifest-v3';
const base = () => {
    const { owner, repo, branch, path } = PHOTO_SOURCE;
    return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`;
};

const readCache = (): Photo[] | null => {
    try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        return cached ? (JSON.parse(cached) as Photo[]) : null;
    } catch {
        return null;
    }
};

const writeCache = (photos: Photo[]) => {
    try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(photos));
    } catch {
        // storage unavailable, the manifest is simply fetched again next time
    }
};

export function usePhotos() {
    const [photos, setPhotos] = useState<Photo[]>(() => readCache() ?? []);
    const [loading, setLoading] = useState(photos.length === 0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (photos.length > 0) return;
        const controller = new AbortController();

        fetch(`${base()}/manifest.json`, { signal: controller.signal })
            .then((res) => {
                if (res.status === 404) return [] as ManifestEntry[];
                if (!res.ok) throw new Error(`GitHub responded with ${res.status}`);
                return res.json() as Promise<ManifestEntry[]>;
            })
            .then((entries) => {
                const found = entries
                    .filter((entry) => entry.width > 0 && entry.height > 0)
                    .map((entry) => ({ ...entry, url: `${base()}/${encodeURIComponent(entry.name)}` }));
                setPhotos(found);
                writeCache(found);
            })
            .catch((err: Error) => {
                if (err.name !== 'AbortError') setError('Could not load photos right now.');
            })
            .finally(() => {
                if (!controller.signal.aborted) setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { photos, loading, error };
}
