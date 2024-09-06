import Apollo from '../images/Skill SVGs/apollo-graphql.svg';
import BlogWebsite from '../images/Project Images/Blog_Website.webp';
import Bootstrap from '../images/Skill SVGs/bootstrap.svg';
import CSS3 from '../images/Skill SVGs/css.svg';
import Express from '../images/Skill SVGs/express.svg';
import Form from '../images/Project Images/Redux_Form.webp';
import GitHub from '../images/Skill SVGs/github.svg';
import GraphQL from '../images/Skill SVGs/graphql.svg';
import HTML5 from '../images/Skill SVGs/html.svg';
import Javascript from '../images/Skill SVGs/javascript.svg';
import Lusion from '../images/Project Images/Lusion_React.webp';
import MongoDB from '../images/Skill SVGs/mongodb.svg';
import Movies from '../images/Project Images/Redux_Movies.webp';
import NEXTJS from '../images/Skill SVGs/nextjs.svg';
import ReactIcon from '../images/Skill SVGs/react.svg';
import Redux from '../images/Skill SVGs/redux.svg';
import MiltonFramer from '../images/Project Images/Milton_Framer_Project.webp';
import Spotify from '../images/Project Images/Spotify_Clone.webp';
import Tailwind from '../images/Skill SVGs/tailwind-css.svg';
import Typescript from '../images/Skill SVGs/typescript.svg';
import MITScratchClone from '../images/Project Images/MITScratchClone.webp';
import Storybook from '../images/Skill SVGs/storybook.svg';
// import Docker from '../images/Skill SVGs/docker.svg';
// import Jenkins from '../images/Skill SVGs/jenkins.svg';
import MaterialUI from '../images/Skill SVGs/materialui.svg';

export const data = {
  navbar: {
    website_name: "ARJ's Portfolio V2",
    about: 'About Me',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    resume: 'Resume'
  },
  social: {
    GitHub: 'https://github.com/ARJ2160',
    LinkedIn: 'https://www.linkedin.com/in/arj2160/',
    Twitter: 'https://twitter.com/Atharvaj2160',
    Email: 'atharvaj2160@gmail.com',
    Resume:
      'https://drive.google.com/file/d/1XkURD6n94oaV-PI2hKPNULHtFiwIyxW_/view?usp=sharing',
    Spotify:
      'https://open.spotify.com/playlist/52gtDapY50kKkLEnnnvYgz?si=89f44d4ce2944b91'
  },
  skills: [
    {
      skillName: 'NEXT JS',
      skillIcon: NEXTJS
    },
    {
      skillName: 'React JS',
      skillIcon: ReactIcon
    },
    {
      skillName: 'Typescript',
      skillIcon: Typescript
    },
    {
      skillName: 'JavaScript',
      skillIcon: Javascript
    },
    {
      skillName: 'Material UI',
      skillIcon: MaterialUI
    },
    {
      skillName: 'Storybook',
      skillIcon: Storybook
    },
    {
      skillName: 'Redux',
      skillIcon: Redux
    },
    // {
    //   skillName: 'Docker',
    //   skillIcon: Docker
    // },
    // {
    //   skillName: 'Jenkins',
    //   skillIcon: Jenkins
    // },
    {
      skillName: 'Tailwind CSS',
      skillIcon: Tailwind
    },
    {
      skillName: 'GraphQL',
      skillIcon: GraphQL
    },
    {
      skillName: 'Apollo GraphQL',
      skillIcon: Apollo
    },
    {
      skillName: 'MongoDB',
      skillIcon: MongoDB
    },
    {
      skillName: 'Express',
      skillIcon: Express
    },
    {
      skillName: 'HTML 5',
      skillIcon: HTML5
    },
    {
      skillName: 'Bootstrap',
      skillIcon: Bootstrap
    },
    {
      skillName: 'CSS 3',
      skillIcon: CSS3
    },
    {
      skillName: 'GitHub',
      skillIcon: GitHub
    }
  ],
  projects: [
    {
      title: 'Next JS Blog V2',
      image: BlogWebsite,
      description:
        'Built a blog website using NEXT JS and Tailwind CSS for the Frontend. Developed a RESTful Express Backend along with a MongoDB database. Implemented OAuth for GitHub and Google. Built a Jenkins pipeline to build and push a new build with every commit',
      tags: [
        'Next JS',
        'Typescript',
        'NextAuth',
        'Zustand',
        'Express JS',
        'MongoDB',
        'Mongoose',
        'Jenkins',
        'Docker'
      ],
      projectLink: 'https://blog-v2-olive.vercel.app/',
      link: 'https://github.com/ARJ2160/Blog-V2',
      backendLink: 'https://github.com/ARJ2160/React-Blog-Backend',
      underDevelopment: true
    },
    {
      title: 'MIT Scratch Clone',
      image: MITScratchClone,
      description: `Developed a clone of the MIT Scratch website with React flow nodes in place of blocks. Used Custom events to control execution of connected blocks using custom events.`,
      tags: [
        'Vite',
        'React JS',
        'React Flow',
        'Tailwind CSS',
        'React Custom Events'
      ],
      projectLink: 'https://cool-twilight-ce65a1.netlify.app/',
      link: 'https://github.com/ARJ2160/MIT-Scratch-Clone',
      originalWebsiteLink: 'https://scratch.mit.edu/projects/editor/'
    },
    {
      title: 'Framer Milton Clone',
      image: MiltonFramer,
      description: `Developed a clone of Milton Framer website using Vite and Tailwind CSS. Used Framer motion to add animation effects.`,
      tags: ['Vite', 'React JS', 'Framer Motion', 'Tailwind CSS'],
      projectLink: 'https://milton-framer-template.vercel.app/',
      link: 'https://github.com/ARJ2160/Milton-Framer-Template',
      originalWebsiteLink: 'https://culture-breathe-337021.framer.app/'
    },
    {
      title: 'Lusion React + Tailwind Clone',
      image: Lusion,
      description: `Developed an emulation of the "Lusion" website using React and Tailwind. Integrated a cart functionality with Stripe API for payments`,
      tags: ['React JS', 'Tailwind CSS', 'Stripe API'],
      projectLink: 'https://tailwind-lusion.vercel.app/',
      link: 'https://github.com/ARJ2160/Tailwind-Lusion',
      originalWebsiteLink: 'https://aht-lusion.myshopify.com/'
    },
    {
      title: 'NEXT JS Spotify Clone',
      image: Spotify,
      description:
        'Created a clone of the Spotify website with NEXT JS, Tailwind CSS, NEXT Auth, and Spotify API. Users can sign in using OAuth and control their own spotify player with the web app.',
      tags: ['NEXT JS', 'Tailwind CSS', 'Spotify API', 'NEXT Auth'],
      projectLink: 'https://next-spotify-clone-xi.vercel.app/',
      link: 'https://github.com/ARJ2160/Next-Spotify-Clone'
    },
    {
      title: 'IMDb Clone',
      image: Movies,
      description:
        'Built an IMDb website clone using the TMDb API with React JS and NEXT UI for the front-end, Redux Toolkit for managing state, and Redux Thunk as middleware for the API calls',
      tags: [
        'Vite JS',
        'Typescript',
        'Tailwind CSS',
        'Next UI',
        'Redux Toolkit',
        'Redux Thunk'
      ],
      projectLink: 'https://redux-movies-lemon.vercel.app/',
      link: 'https://github.com/ARJ2160/Redux-Movies',
      underDevelopment: true
    },
    {
      title: 'Redux Authentication System',
      image: Form,
      description:
        'Created an Authentication Flow System using React JS for the front-end and Redux Toolkit to manage state.',
      tags: [
        'React JS',
        'Redux',
        'Redux Toolkit',
        'Redux Persist',
        'MD5 Hashing'
      ],
      projectLink: 'https://redux-form-one.vercel.app/',
      link: 'https://github.com/ARJ2160/Redux-Authentication'
    }
  ],
  hero: {
    name: 'Atharva Joshi.',
    about_me: `I'm a React Developer who loves creating aesthetically pleasing front-ends. Currently, I'm focused on building my logic to the next level in basic Javascript. When I'm not coding, I'm probably listening to some hip-hop ;)`
  },
  about: {
    about_me: `Hey there! My name is Atharva, and I love creating sleek front-ends and high-performant back-ends for the web. I first started playing around with HTML and CSS in 2021, trying to recreate mockups from Tumblr, and since then, I have been making websites with React and MERN Stack. Nowadays, I'm trying to learn Node JS, so I can be a Full-Stack developer. I work at an IT firm called Apptware, where I work on web-apps and E-commerce websites used by local businesses.`,
    tech: `Here are some of the technologies I get to work with :`,
    tech_list: ['React Typescript', 'Storybook', 'Cypress', 'JavaScript ES6']
  }
};
