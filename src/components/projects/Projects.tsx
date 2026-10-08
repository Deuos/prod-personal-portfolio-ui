import NavBar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import { BsGithub } from 'react-icons/bs'
import { featuredProjects, projects } from './projectData';

const Projects = () => {
    return (
        <div className="flex flex-col my-3 h-screensize">
            <div className="mx-2 space-y-4">
                <p className="text-white/20 font-light text-xs align-top ml-5">&nbsp;</p>
                <p className="text-white/20 font-light text-xs align-top ml-14">&nbsp;</p>

                {/* Navbar */}
                <p className='z-20 text-white/20 font-light text-xs align-top ml-28'>&nbsp;</p>
                <div className='flex justify-center'>
                    <div className="flex w-navbarWidth items-center justify-between max-lg:w-navbarWidthTablet max-mobile:w-navbarWidthMobile">
                        <Link to="/">
                            <p className="text-4.5xl font-black animate-text">
                                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">Projects</span>

                            </p>
                            {/* <p className="text-4.5xl font-black animate-text bg-gradient-to-r from-teal-500 via-purple-50 bg-clip-text text-transparent">KP
                                <span className='inline-block w-3 h-3 rounded-full ml-1 animate-background bg-gradient-to-r to-orange-500'></span>
                            </p> */}
                        </Link>
                        <NavBar />
                    </div>
                </div>
                <div className='flex flex-col text-white items-center'>
                    <button className="flex bg-transparent mt-4 mb-4 text-black mr-10 w-contactButtonWidth h-contactButtonHeight items-center justify-center py-2 px-4 bg-white rounded-customButton hover:border hover:bg-gray-400">
                        <Link className="flex items-center justify-center" target="_blank" rel="noopener noreferrer" to="https://github.com/Deuos">
                            <div className='font-black text-xl mr-2'>Github</div>
                            <div ><BsGithub size={30} /></div>
                        </Link>
                    </button>

                </div>
                <div className='flex flex-col items-center'>
                    <section className='w-title max-lg:w-titleTablet max-mobile:w-titleMobile'>
                        <h2 className='mt-5 mb-2 font-bold text-3xl max-lg:text-2xl'>Feature Project.</h2>
                        <ul>
                            {featuredProjects.map((project) => (
                                <ProjectItem key={project.number} {...project} />
                            ))}
                        </ul>
                        <h2 className='mt-10 mb-2 font-bold text-3xl max-lg:text-2xl'>Projects.</h2>
                        <ul>
                            {projects.map((project) => (
                                <ProjectItem key={project.number} {...project} />
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
            <div className="fixed pointer-events-none z-0 select-none rotate-90 mx-auto -left-[23rem] bottom-[17.25rem] text-white text-10xl font-black opacity-7">
                Projects
            </div>
        </div>
    )
}

export default Projects;
