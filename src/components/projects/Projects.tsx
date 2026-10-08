import NavBar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import { BsGithub } from 'react-icons/bs'
import CardsFeatures from './CardsFeature';

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
                <div className='flex flex-col items-center p-4 justify-center max-lg:space-x-0 max-lg:p-0'>
                    <div className='w-[768px] mt-[20px] mb-[30px] max-lg:w-[368px] font-bold text-3xl max-lg:text-2xl'>Feature Project.</div>
                    <div className='flex flex-wrap p-4 space-x-6 justify-center max-lg:space-x-0 max-lg:p-0'>
                        <CardsFeatures
                            number='000'
                            title='FreeEnglishPractice'
                            description='A free online platform for improving English skills.'
                            lang1="#Typescript"
                            lang2="#Reactjs"
                            lang3="#Nodejs"
                            link='https://FreeEnglishPractice.com/'
                            link2='https://blog.freeenglishpractice.com/what-is-ecocix/'
                            link3='https://www.easternct.edu/news/_stories-and-releases/2023/12-december/eastern-students-pitch-entrepreneurial-proposals-in-inaugural-competition.html'
                            button='Website'
                            button2='What?'
                            button3='Funding?'
                        ></CardsFeatures>
                        <CardsFeatures
                            number='001'
                            title='WhaReach'
                            description='Currently developing a platform that connects businesses with customers using the official WhatsApp Business API.'
                            lang1="#Typescript"
                            lang2="#Reactjs"
                            lang3="#Nodejs"
                            link='https://whareach.com/'
                            button='Beta Website'
                        ></CardsFeatures>
                    </div>
                    <div className='flex flex-wrap p-4 space-x-6 justify-center max-lg:space-x-0 max-lg:p-0'>
                        <CardsFeatures
                            number='002'
                            title='SwiftySaas'
                            description=' A React.js + Node.js boilerplate with an already configured Authentication System, Payment Setup, Role-based Routing, and more.'
                            lang1="#Typescript"
                            lang2="#Reactjs"
                            lang3="#Nodejs"
                            link='https://swiftysaas.com/'
                            link2='https://docs.swiftysaas.com/'
                            button='Website'
                            button2='Docs?'
                        ></CardsFeatures>
                    </div>

                    <div className='w-[768px] mt-5 max-lg:w-[368px] font-bold text-3xl max-lg:text-2xl'>Projects.</div>
                </div>
                <div className="flex flex-wrap p-4 space-x-6 justify-center max-lg:space-x-0 max-lg:p-0">
                    <Cards
                        number='003'
                        title='Indeed Job Listings'
                        description='Entry-Level Computer Science Job Postings in New York, Massachusetts, and Connecticut: A study on Job Requirements and Salary Trends. View Pdf for more information on data collection techniques, execution, and results'
                        lang1="#R"
                        lang2="#Python"
                        lang3="#NLTK"
                        link='https://github.com/Deuos/Indeed-Job-Listings-Senior-Research'
                        button='View Source Code'
                    />
                    <Cards
                        number='004'
                        title='Exploring Grade Gene Expression'
                        description='Exploring Grade Gene Expression (G1 vs G3) Analysis in GDC TCGA Cervical Cancer (CESC) Using RNA-Seq Data. View Pdf/R File for additional detail on the process and results.'
                        lang1="#R"
                        lang2="#ggplot2"
                        lang3="#edgeR"
                        link='https://github.com/Deuos/Cervical-Cancer-G1-vs-G3-Analysis'
                        button='View Source Code'
                    />
                </div>
                <div className="flex flex-wrap p-4 space-x-6 justify-center max-lg:space-x-0 max-lg:p-0">
                    <Cards
                        number='005'
                        title='Vosk Websocket'
                        description='Developed a Docker image for Vosk, a speech-to-textframework, by utilizing the pretrained model. Created a WebSocket utilizing Nodejs to create aconnection that efficiently transcribes audio and returns the corresponding transcriptions, showcasing the capabilities of Vosk in real-time.'
                        lang1="#JavaScript"
                        lang2="#Websocket"
                        lang3="#Docker"
                        link='https://github.com/Deuos/VoskWebsocket'
                        button='View Source Code'
                    />
                    <Cards
                        number='006'
                        title='Online LMS'
                        description='This online book checkout/returning system, built with Node.js, provides capabilities for users and administrators, enabling actions such as browsing, adding, and deleting books. The system boasts a user-friendly gui enhanced with Bootstrap and CSS, while ensuring data management through MongoDB.'
                        lang1="#JavaScript"
                        lang2="#Nodejs"
                        lang3="#Ejs"
                        link='https://github.com/Deuos/OnlineLibraryManagementSystem'
                        button='View Source Code'
                    />
                </div>
                <div className="flex flex-wrap p-4 space-x-6 justify-center max-lg:space-x-0 max-lg:p-0">
                    <Cards
                        number='007'
                        title='Personal Website v2'
                        description='Kushapatel.dev, is a personal website, which I created to host my personal projects along with other items. The newly built version website utilizes Reactjs along with TailwindCSS to make gui.'
                        lang1="#TypeScript"
                        lang2="#TailwindCSS"
                        lang3="#ReactJs"
                        link='https://github.com/Deuos/PersonalWebsiteV2'
                        button='View Source Code'
                    />
                    <Cards
                        number='008'
                        title='Statement to Excel'
                        description='Converts Elan Credit Card Statements to Excel using the Node.js environment along with pdfreader and xlsx libraries. The pdfreader reads the whole statement and then compresses it down to find the date, balance, and transactions that are added to Excel.'
                        lang1="#JavaScript"
                        lang2="#Nodejs"
                        lang3=""
                        link='https://github.com/Deuos/Credit-Card-Statement-PDF-To-Excel'
                        button='View Source Code'
                    />

                </div>
                <div className="flex flex-wrap p-4 space-x-6 justify-center max-lg:space-x-0 max-lg:p-0">
                    {/* Card 1 */}
                    <Cards
                        number='009'
                        title='Personal Website v1'
                        description='Kushapatel.dev, is a personal website, which I created to host my personal projects along with other items. I built this using Html and pure CSS; hosting was done on GitHub Pages along with a Lets Encrypt certificate.'
                        lang1="#HTML/CSS"
                        lang2=""
                        lang3=""
                        link='https://deuos.github.io/PersonalWebsiteV1/'
                        button='View Website'
                    />
                    <Cards
                        number='010'
                        title='LMS'
                        description='This is a library management system developed in a Node.js runtime environment for both users and admins. It facilitates browsing, adding, deleting, and updating books. Our GUI consists of Bootstrap and CSS, and our system utilizes Monogdb database utilizing CURB method.'
                        lang1="#JavaScript"
                        lang2="#HTML/CSS"
                        lang3="#Bootstrap"
                        link='https://github.com/Deuos/Library-Management-System'
                        button='View Source Code'
                    />

                </div>
                <div className="flex flex-wrap p-4 space-x-6 justify-center max-lg:space-x-0 max-lg:p-0">
                    <Cards
                        number='011'
                        title=' LC-3-Sim-Calc'
                        description='This calculator takes in a 3-digit number and has the ability to add and subtract, and runs on an LC-3 Simulator (UPenn). This simulator takes in the keyboard input of the 2 variables and the operation and then displays the output onto the screen in a readable format.'
                        lang1="#Assembly"
                        lang2="#LC-3 Simulator"
                        lang3=""
                        link='https://github.com/Deuos/LC-3-Sim-Calc'
                        button='View Source Code'
                    />
                    <Cards
                        number='012'
                        title='Space Shooters'
                        description='SpaceShooters is a game developed in the JavaFX framework using Object Oriented Programming. Some of the key features include the ability to generate infinite bullets from the ships location, randomized asteroid drops, along with other features.'
                        lang1="#Java"
                        lang2="#JavaFx"
                        lang3="#CSS"
                        link='https://github.com/Deuos/SpaceShooters'
                        button='View Source Code'
                    />
                </div>
            </div>
            <div className="fixed pointer-events-none z-0 select-none rotate-90 mx-auto -left-[23rem] bottom-[17.25rem] text-white text-10xl font-black opacity-7">
                Projects
            </div>
        </div>
    )
}

export default Projects;
