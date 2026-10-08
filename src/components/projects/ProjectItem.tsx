import type { Project } from './projectData';

function ProjectItem({ number, title, description, tags, links }: Project) {
    return (
        <li className="flex gap-6 py-8 border-b border-white/10 last:border-b-0 max-mobile:gap-4">
            <span className="w-10 shrink-0 pt-1 text-sm font-medium text-white/30">{number}</span>
            <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-base font-light leading-relaxed text-white/60">{description}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                    <div className="flex flex-wrap gap-x-5 gap-y-1">
                        {links.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                            >
                                {label} <span aria-hidden>&#8599;</span>
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-x-3 text-sm text-Main">
                        {tags.map((tag) => (
                            <span key={tag}>#{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ProjectItem;
