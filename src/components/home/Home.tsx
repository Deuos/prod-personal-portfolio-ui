import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import NavBar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';

//max-lg - 1024px tablet

const Home = () => {
    return (
        <div className="flex flex-col my-3 h-screensize">
            <div className="mx-2 space-y-4">
                <p className="text-white/10 font-light text-xs align-top ml-5 visible max-lg:invisible">&lt;html mode="Dark"&gt;</p>
                <p className="text-white/10 font-light text-xs align-top ml-14 visible max-lg:invisible">&lt;body class="Welcome Page"&gt;</p>

                {/* Navbar */}
                <p className='text-white/10 font-light text-xs align-top ml-28 visible max-lg:invisible'>&lt;navbar&gt;</p>
                <div className='flex justify-center'>
                    <div className="flex w-navbarWidth items-center justify-between max-lg:w-navbarWidthTablet max-mobile:w-navbarWidthMobile">
                        <Link to="/">
                            <p className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text">
                                <span className="text-4.5xl font-black text-transparent">KP</span>
                            </p>
                            {/* <p className="text-4.5xl font-black animate-text bg-gradient-to-r from-teal-500 via-purple-50 bg-clip-text text-transparent">KP
                                <span className='inline-block w-3 h-3 rounded-full ml-1 animate-background bg-gradient-to-r to-orange-500'></span>
                            </p> */}
                        </Link>
                        <NavBar />
                    </div>
                </div>
                <p className='text-white/10 font-light text-xs align-top ml-28 visible max-lg:invisible'>&lt;navbar&gt;</p>
                {/* Navbar */}
                {/* Animation */}
                <p className='text-white/10 font-light text-xs align-top ml-56 visible max-lg:invisible'>&lt;h1&gt;</p>
                <div className="flex flex-col items-center mt-20">
                    <div className="font-bold text-4xl my-0 text-white w-title max-lg:w-titleTablet max-lg:text-2xl max-mobile:w-titleMobile max-mobile:h-20">
                        <TypeAnimation
                            sequence={[
                                'Hi, my name is Kush, and I am a broke',
                                30,
                                'Hi, my name is Kush, and I am a College Graduate',
                                1000,
                                'Hi, my name is Kush, and I am also a Web Developer',
                                1000,
                                'Hi, my name is Kush, and I am also a Software Engineer',
                                1000,
                            ]}
                            speed={15}
                            repeat={0}
                            cursor={false}
                        />
                    </div>
                </div>
                <p className='text-white/10 font-light text-xs align-top ml-56 visible max-lg:invisible'>&lt;/h1&gt;</p>
                <p className='text-white/10 font-light text-xs align-top ml-72 visible max-lg:invisible'>&lt;p&gt;</p>

                <div className='flex flex-col items-center mt-20'>
                    <div className="w-title text-left text-2xl font-semibold max-lg:w-titleTablet max-lg:text-xl max-mobile:w-titleMobile">
                        <p>I like building Websites and Solving Problems.</p>
                        <br></br>
                        <p>View my&nbsp;
                            <Link className="relative before:absolute before:bg-gray-400 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.25] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500" to="/Projects"><span className="relative">Projects</span></Link>
                            ,&nbsp;
                            <Link className="relative before:absolute before:bg-gray-400 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.25] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500" to="/Photography"><span className="relative">Photography</span></Link>
                            ,&nbsp;
                            <Link className="relative before:absolute before:bg-gray-400 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.25] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500" to="/ContactMe"><span className="relative">Contact Me</span></Link>
                            ,&nbsp;or send me an email at
                            <p className="w-fit hover:animate-swing">
                                <a href='mailto:KuPatel2021@gmail.com'>KuPatel2021@gmail.com.
                                </a>
                            </p>
                        </p>
                    </div>
                </div>
                <p className='text-white/10 font-light text-xs align-top ml-72 visible max-lg:invisible'>&lt;p&gt;</p>
                <p className="text-white/10 font-light text-xs align-top ml-72 visible max-lg:invisible">&lt;button&gt;</p>
                <div className='flex flex-col items-center mt-20'>
                    <br></br>
                    <div className="w-title max-lg:w-titleTablet max-mobile:w-titleMobile">
                        <Link to="/AboutMe" className=' inline-block'>
                            <div className='w-fit text-2xl font-semibold max-lg:text-xl '>
                                <div className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">See more about me</div>
                            </div>
                        </Link>
                    </div>
                    <br></br>
                </div>
                <p className="text-white/10 font-light text-xs align-top ml-72 visible max-lg:invisible">&lt;/button&gt;</p>
                <p className="text-white/10 font-light text-xs align-top ml-14 visible max-lg:invisible">&lt;body class="Welcome Page"&gt;</p>
                <p className="text-white/10 font-light text-xs align-top ml-5 visible max-lg:invisible">&lt;html mode="Dark"&gt;</p>
            </div>
            <div className="fixed pointer-events-none z-0 select-none -rotate-90 mx-auto right-[-12rem] bottom-[7rem] text-white text-10xl font-black opacity-7">
                Patel
            </div>
        </div >
    );
};
export default Home;
