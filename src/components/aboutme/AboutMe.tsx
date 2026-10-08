import NavBar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';

interface Entry {
    period: string;
    name: string;
    detail?: string;
}

const experience: Entry[] = [
    {
        period: 'Jun 2025 - Present',
        name: 'Travelers',
        detail: 'Software Engineer',
    },
    {
        period: 'May 2024 - May 2025',
        name: 'Connecticut Judicial Branch',
        detail: 'Software Development Temp',
    },
    {
        period: 'May 2024 - Oct 2024',
        name: 'COCC',
        detail: 'Software Development Intern',
    },
    {
        period: 'Jan 2024 - May 2024',
        name: 'Connecticut Judicial Branch',
        detail: 'Software Development Intern',
    },
];

const education: Entry[] = [
    {
        period: '2022 - 2024',
        name: 'Eastern Connecticut State University',
        detail: 'Bachelor of Science in Computer Science',
    },
    { period: '2021 - 2022', name: 'Wentworth Institute of Technology' },
];

const Section = ({ title, entries, className }: { title: string; entries: Entry[]; className: string }) => (
    <>
        <h2 className={`${className} mb-2 font-bold text-3xl max-lg:text-2xl`}>{title}</h2>
        <ul>
            {entries.map(({ period, name, detail }, i) => (
                <li key={`${name}-${period}`} className='flex gap-6 py-8 border-b border-white/10 last:border-b-0 max-mobile:gap-4'>
                    <span className='w-10 shrink-0 pt-1 text-sm font-medium text-white/30'>{String(i + 1).padStart(3, '0')}</span>
                    <div className='flex-1 min-w-0'>
                        <h3 className='text-2xl font-bold text-white'>{name}</h3>
                        {detail && <p className='mt-2 text-base font-light leading-relaxed text-white/60'>{detail}</p>}
                        <p className='mt-4 text-sm text-Main'>{period}</p>
                    </div>
                </li>
            ))}
        </ul>
    </>
);

const AboutMe = () => {
    return (
        <div className="flex flex-col my-3 h-screensize">
            <div className="mx-2 space-y-4">
                <p className="text-white/20 font-light text-xs align-top ml-5">&nbsp;</p>
                <p className="text-white/20 font-light text-xs align-top ml-14">&nbsp;</p>

                {/* Navbar */}
                <p className='text-white/20 font-light text-xs align-top ml-28'>&nbsp;</p>
                <div className='flex justify-center'>
                    <div className="flex w-navbarWidth items-center justify-between max-lg:w-navbarWidthTablet max-mobile:w-navbarWidthMobile">
                        <Link to="/">
                            <p className="text-4.5xl font-black animate-text">
                                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">About Me</span>
                            </p>
                            {/* <p className="text-4.5xl font-black animate-text bg-gradient-to-r from-teal-500 via-purple-50 bg-clip-text text-transparent">KP
                                <span className='inline-block w-3 h-3 rounded-full ml-1 animate-background bg-gradient-to-r to-orange-500'></span>
                            </p> */}
                        </Link>
                        <NavBar />
                    </div>
                </div>
                <div className='flex flex-col items-center text-white'>
                    <section className='w-title max-lg:w-titleTablet max-mobile:w-titleMobile'>
                        <Section title='Work Experience.' entries={experience} className='mt-5' />
                        <Section title='Education.' entries={education} className='mt-10' />
                    </section>
                </div>
            </div>
            <div className="fixed pointer-events-none z-0 select-none leading-tight bottom-0 left-0 font-black opacity-7 text-10xl h-backgroundTitle text-white">
                About Me
            </div>
        </div>
    )
}

export default AboutMe;
