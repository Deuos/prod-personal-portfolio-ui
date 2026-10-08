import { useEffect } from 'react';
import type { Photo } from './usePhotos';

interface LightboxProps {
    photos: Photo[];
    index: number;
    onClose: () => void;
    onChange: (index: number) => void;
}

function Lightbox({ photos, index, onClose, onChange }: LightboxProps) {
    const count = photos.length;
    const photo = photos[index];
    const prev = () => onChange((index - 1 + count) % count);
    const next = () => onChange((index + 1) % count);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count);
            if (e.key === 'ArrowRight') onChange((index + 1) % count);
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKey);
        };
    }, [index, count, onClose, onChange]);

    const buttonClass = 'absolute text-white/70 hover:text-white text-4xl px-4 py-2 select-none';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={onClose} role="dialog" aria-modal="true">
            <button className={`${buttonClass} top-2 right-2`} onClick={onClose} aria-label="Close">&times;</button>
            {count > 1 && (
                <>
                    <button className={`${buttonClass} left-2 top-1/2 -translate-y-1/2`} onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo">&#8249;</button>
                    <button className={`${buttonClass} right-2 top-1/2 -translate-y-1/2`} onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo">&#8250;</button>
                </>
            )}
            <figure className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                <img
                    src={photo.url}
                    alt={photo.name}
                    className="max-h-[80vh] max-w-[90vw] object-contain"
                />
                {(photo.camera || photo.lens || photo.settings || photo.takenAt) && (
                    <figcaption className="mt-4 max-w-[90vw] text-center text-sm text-white/70">
                        {photo.camera && <p className="font-semibold text-white">{photo.camera}</p>}
                        {photo.lens && <p>{photo.lens}</p>}
                        {photo.settings && <p className="text-Main">{photo.settings}</p>}
                        {photo.takenAt && (
                            <p className="text-white/40">
                                {new Date(photo.takenAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        )}
                    </figcaption>
                )}
            </figure>
        </div>
    );
}

export default Lightbox;
