import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../sidebar/Sidebar';
import Lightbox from './Lightbox';
import { usePhotos, type Photo } from './usePhotos';

const BATCH_SIZE = 12;

// Matches the `mobile` (624px) and `lg` (1024px) breakpoints used elsewhere in the site
const useColumnCount = () => {
    const get = () => (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 624 ? 2 : 1);
    const [count, setCount] = useState(get);
    useEffect(() => {
        const onResize = () => setCount(get());
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    return count;
};

// Greedy masonry: each photo goes to the currently shortest column. Photos already placed never move
// when more are appended, so loading more while scrolling does not shuffle the layout.
const buildColumns = (photos: { photo: Photo; index: number }[], columnCount: number) => {
    const columns = Array.from({ length: columnCount }, () => [] as { photo: Photo; index: number }[]);
    const heights = new Array(columnCount).fill(0);
    for (const item of photos) {
        const shortest = heights.indexOf(Math.min(...heights));
        columns[shortest].push(item);
        heights[shortest] += item.photo.height / item.photo.width;
    }
    return columns;
};

const Photography = () => {
    const { photos, loading, error } = usePhotos();
    const [selected, setSelected] = useState<number | null>(null);
    const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
    const sentinel = useRef<HTMLDivElement>(null);
    const columnCount = useColumnCount();

    const hasMore = visibleCount < photos.length;

    useEffect(() => {
        const node = sentinel.current;
        if (!node || !hasMore) return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setVisibleCount((n) => n + BATCH_SIZE);
            },
            { rootMargin: '600px' }
        );
        observer.observe(node);
        return () => observer.disconnect();
        // visibleCount is a dependency so the observer re-checks after each batch if the sentinel is still on screen
    }, [hasMore, visibleCount]);

    const columns = useMemo(
        () => buildColumns(photos.slice(0, visibleCount).map((photo, index) => ({ photo, index })), columnCount),
        [photos, visibleCount, columnCount]
    );

    return (
        <div className="flex flex-col my-3 min-h-screensize">
            <div className="mx-2 space-y-4 max-mobile:mx-4">
                <p className="max-mobile:hidden text-white/20 font-light text-xs align-top ml-5">&nbsp;</p>
                <p className="max-mobile:hidden text-white/20 font-light text-xs align-top ml-14">&nbsp;</p>

                {/* Navbar */}
                <p className='max-mobile:hidden text-white/20 font-light text-xs align-top ml-28'>&nbsp;</p>
                <div className='flex justify-center'>
                    <div className="flex max-w-full w-navbarWidth items-center justify-between max-lg:w-navbarWidthTablet max-mobile:w-full">
                        <Link to="/">
                            <p className="text-4.5xl max-mobile:text-3xl font-black animate-text">
                                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">Photography</span>
                            </p>
                        </Link>
                        <NavBar />
                    </div>
                </div>

                <div className='flex flex-col items-center text-white'>
                    <section className='relative z-10 max-w-full w-title max-lg:w-titleTablet max-mobile:w-full'>
                        {loading && <p className='mt-10 text-white/60'>Loading photos...</p>}
                        {!loading && error && <p className='mt-10 text-white/60'>{error}</p>}
                        {!loading && !error && photos.length === 0 && <p className='mt-10 text-white/60'>No photos yet. Check back soon.</p>}
                        <div className='mt-5 flex gap-4 items-start'>
                            {columns.map((column, c) => (
                                <div key={c} className='flex flex-1 min-w-0 flex-col gap-4'>
                                    {column.map(({ photo, index }) => (
                                        <button
                                            key={photo.name}
                                            className='block w-full overflow-hidden rounded-sm bg-white/5 cursor-zoom-in'
                                            style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                                            onClick={() => setSelected(index)}
                                        >
                                            <img
                                                src={photo.url}
                                                alt={photo.name}
                                                loading='lazy'
                                                decoding='async'
                                                className='h-full w-full object-cover transition-opacity duration-300 hover:opacity-80'
                                            />
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div ref={sentinel} className='h-10 mb-10' />
                    </section>
                </div>
            </div>
            <div className="fixed pointer-events-none z-0 select-none leading-tight bottom-0 left-0 font-black opacity-7 text-10xl h-backgroundTitle max-mobile:text-7xl max-mobile:h-auto text-white">
                Photography
            </div>
            {selected !== null && (
                <Lightbox photos={photos} index={selected} onClose={() => setSelected(null)} onChange={setSelected} />
            )}
        </div>
    );
};

export default Photography;
