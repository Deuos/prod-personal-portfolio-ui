export interface ProjectLink {
    label: string;
    href: string;
}

export interface Project {
    number: string;
    title: string;
    description: string;
    tags: string[];
    links: ProjectLink[];
}

const source = (href: string): ProjectLink[] => [{ label: 'Source Code', href }];

export const featuredProjects: Project[] = [
    {
        number: '000',
        title: 'FreeEnglishPractice',
        description: 'A free online platform for improving English skills.',
        tags: ['Typescript', 'Reactjs', 'Nodejs'],
        links: [
            { label: 'Website', href: 'https://FreeEnglishPractice.com/' },
            { label: 'What?', href: 'https://blog.freeenglishpractice.com/what-is-ecocix/' },
            { label: 'Funding?', href: 'https://www.easternct.edu/news/_stories-and-releases/2023/12-december/eastern-students-pitch-entrepreneurial-proposals-in-inaugural-competition.html' },
        ],
    },
    {
        number: '001',
        title: 'Taco Cents',
        description: 'A Taco Bell optimizer that helps you get the most out of your order.',
        tags: ['Taco Bell', 'Optimizer'],
        links: [{ label: 'Website', href: 'https://tacocents.com/' }],
    },
    {
        number: '002',
        title: 'Pricify Labs',
        description: 'Geopricing for WooCommerce. Show customers prices tailored to their location.',
        tags: ['WooCommerce', 'Geopricing'],
        links: [{ label: 'Website', href: 'https://pricifylabs.com/' }],
    },
];

export const projects: Project[] = [
    {
        number: '003',
        title: 'WhaReach',
        description: 'Currently developing a platform that connects businesses with customers using the official WhatsApp Business API.',
        tags: ['Typescript', 'Reactjs', 'Nodejs'],
        links: [{ label: 'Beta Website', href: 'https://whareach.com/' }],
    },
    {
        number: '004',
        title: 'SwiftySaas',
        description: 'A React.js + Node.js boilerplate with an already configured Authentication System, Payment Setup, Role-based Routing, and more.',
        tags: ['Typescript', 'Reactjs', 'Nodejs'],
        links: [
            { label: 'Website', href: 'https://swiftysaas.com/' },
            { label: 'Docs', href: 'https://docs.swiftysaas.com/' },
        ],
    },
    {
        number: '005',
        title: 'Indeed Job Listings',
        description: 'Entry-Level Computer Science Job Postings in New York, Massachusetts, and Connecticut: A study on Job Requirements and Salary Trends. View Pdf for more information on data collection techniques, execution, and results.',
        tags: ['R', 'Python', 'NLTK'],
        links: source('https://github.com/Deuos/Indeed-Job-Listings-Senior-Research'),
    },
    {
        number: '006',
        title: 'Exploring Grade Gene Expression',
        description: 'Exploring Grade Gene Expression (G1 vs G3) Analysis in GDC TCGA Cervical Cancer (CESC) Using RNA-Seq Data. View Pdf/R File for additional detail on the process and results.',
        tags: ['R', 'ggplot2', 'edgeR'],
        links: source('https://github.com/Deuos/Cervical-Cancer-G1-vs-G3-Analysis'),
    },
    {
        number: '007',
        title: 'Vosk Websocket',
        description: 'Developed a Docker image for Vosk, a speech-to-text framework, by utilizing the pretrained model. Created a WebSocket utilizing Nodejs to create a connection that efficiently transcribes audio and returns the corresponding transcriptions, showcasing the capabilities of Vosk in real-time.',
        tags: ['JavaScript', 'Websocket', 'Docker'],
        links: source('https://github.com/Deuos/VoskWebsocket'),
    },
    {
        number: '008',
        title: 'Online LMS',
        description: 'This online book checkout/returning system, built with Node.js, provides capabilities for users and administrators, enabling actions such as browsing, adding, and deleting books. The system boasts a user-friendly gui enhanced with Bootstrap and CSS, while ensuring data management through MongoDB.',
        tags: ['JavaScript', 'Nodejs', 'Ejs'],
        links: source('https://github.com/Deuos/OnlineLibraryManagementSystem'),
    },
    {
        number: '009',
        title: 'Personal Website v2',
        description: 'Kushapatel.dev, is a personal website, which I created to host my personal projects along with other items. The newly built version website utilizes Reactjs along with TailwindCSS to make gui.',
        tags: ['TypeScript', 'TailwindCSS', 'ReactJs'],
        links: source('https://github.com/Deuos/PersonalWebsiteV2'),
    },
    {
        number: '010',
        title: 'Statement to Excel',
        description: 'Converts Elan Credit Card Statements to Excel using the Node.js environment along with pdfreader and xlsx libraries. The pdfreader reads the whole statement and then compresses it down to find the date, balance, and transactions that are added to Excel.',
        tags: ['JavaScript', 'Nodejs'],
        links: source('https://github.com/Deuos/Credit-Card-Statement-PDF-To-Excel'),
    },
    {
        number: '011',
        title: 'Personal Website v1',
        description: 'Kushapatel.dev, is a personal website, which I created to host my personal projects along with other items. I built this using Html and pure CSS; hosting was done on GitHub Pages along with a Lets Encrypt certificate.',
        tags: ['HTML/CSS'],
        links: [{ label: 'View Website', href: 'https://deuos.github.io/PersonalWebsiteV1/' }],
    },
    {
        number: '012',
        title: 'LMS',
        description: 'This is a library management system developed in a Node.js runtime environment for both users and admins. It facilitates browsing, adding, deleting, and updating books. Our GUI consists of Bootstrap and CSS, and our system utilizes Monogdb database utilizing CURB method.',
        tags: ['JavaScript', 'HTML/CSS', 'Bootstrap'],
        links: source('https://github.com/Deuos/Library-Management-System'),
    },
    {
        number: '013',
        title: 'LC-3-Sim-Calc',
        description: 'This calculator takes in a 3-digit number and has the ability to add and subtract, and runs on an LC-3 Simulator (UPenn). This simulator takes in the keyboard input of the 2 variables and the operation and then displays the output onto the screen in a readable format.',
        tags: ['Assembly', 'LC-3 Simulator'],
        links: source('https://github.com/Deuos/LC-3-Sim-Calc'),
    },
    {
        number: '014',
        title: 'Space Shooters',
        description: 'SpaceShooters is a game developed in the JavaFX framework using Object Oriented Programming. Some of the key features include the ability to generate infinite bullets from the ships location, randomized asteroid drops, along with other features.',
        tags: ['Java', 'JavaFx', 'CSS'],
        links: source('https://github.com/Deuos/SpaceShooters'),
    },
];
