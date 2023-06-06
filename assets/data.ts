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
import Samtej from '../images/Project Images/SamTej.webp';
import Spotify from '../images/Project Images/Spotify_Clone.webp';
import Tailwind from '../images/Skill SVGs/tailwind-css.svg';
import Typescript from '../images/Skill SVGs/typescript.svg';
// import Purescript from '../images/Skill SVGs/purescript.svg';
import Storybook from '../images/Skill SVGs/storybook.svg';
import Flask from '../images/Skill SVGs/flask.svg';
import Python from '../images/Skill SVGs/python.svg';
import { v4 as uuidv4 } from 'uuid';

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
      'https://drive.google.com/file/d/1bgX0XFuVMW2-hoqDORwmypORbiqUnN-h/view?usp=sharing',
    Spotify:
      'https://open.spotify.com/playlist/52gtDapY50kKkLEnnnvYgz?si=89f44d4ce2944b91'
  },
  skills: [
    {
      id: uuidv4(),
      skillName: 'NEXT JS',
      skillIcon: NEXTJS
    },
    {
      id: uuidv4(),
      skillName: 'React JS',
      skillIcon: ReactIcon
    },
    {
      id: uuidv4(),
      skillName: 'Typescript',
      skillIcon: Typescript
    },
    {
      id: uuidv4(),
      skillName: 'JavaScript',
      skillIcon: Javascript
    },
    {
      id: uuidv4(),
      skillName: 'Storybook',
      skillIcon: Storybook
    },
    {
      id: uuidv4(),
      skillName: 'Redux',
      skillIcon: Redux
    },
    {
      id: uuidv4(),
      skillName: 'Flask',
      skillIcon: Flask
    },
    {
      id: uuidv4(),
      skillName: 'Python',
      skillIcon: Python
    },
    {
      id: uuidv4(),
      skillName: 'Tailwind CSS',
      skillIcon: Tailwind
    },
    {
      id: uuidv4(),
      skillName: 'GraphQL',
      skillIcon: GraphQL
    },
    {
      id: uuidv4(),
      skillName: 'Apollo GraphQL',
      skillIcon: Apollo
    },
    {
      id: uuidv4(),
      skillName: 'MongoDB',
      skillIcon: MongoDB
    },
    {
      id: uuidv4(),
      skillName: 'Express',
      skillIcon: Express
    },
    {
      id: uuidv4(),
      skillName: 'HTML 5',
      skillIcon: HTML5
    },
    {
      id: uuidv4(),
      skillName: 'Bootstrap',
      skillIcon: Bootstrap
    },
    {
      id: uuidv4(),
      skillName: 'CSS 3',
      skillIcon: CSS3
    },
    {
      id: uuidv4(),
      skillName: 'GitHub',
      skillIcon: GitHub
    }
  ],
  projects: [
    {
      id: uuidv4(),
      title: 'Next JS Blog V2',
      image: BlogWebsite,
      description:
        'Built a blog website using NEXT JS and Tailwind CSS for the Frontend. Developed a RESTful Express Backend which connects to a MongoDB database and logins the users allowing them to post blogs. Implemented OAuth for GitHub and Google',
      tags: [
        'Next JS',
        'Typescript',
        'NextAuth',
        'Redux',
        'Redux Toolkit',
        'MD5',
        'Express JS',
        'MongoDB',
        'Mongoose'
      ],
      projectLink: 'https://blog-v2-olive.vercel.app/',
      link: 'https://github.com/ARJ2160/Blog-V2',
      backendLink: 'https://github.com/ARJ2160/React-Blog-Backend',
      underDevelopment: true
    },
    {
      id: uuidv4(),
      title: 'Lusion React + Tailwind Clone',
      image: Lusion,
      description: `Developed an emulation of the "Lusion" website using React and Tailwind. Integrated a cart functionality with Stripe API for payments`,
      tags: ['React JS', 'Tailwind CSS', 'Stripe API'],
      projectLink: 'https://tailwind-lusion.vercel.app/',
      link: 'https://github.com/ARJ2160/Tailwind-Lusion'
    },
    {
      id: uuidv4(),
      title: 'NEXT JS Spotify Clone',
      image: Spotify,
      description:
        'Created a clone of the Spotify website with NEXT JS, Tailwind CSS, NEXT Auth, and Spotify API. Users can sign in using OAuth and control their own spotify player with the web app.',
      tags: ['NEXT JS', 'Tailwind CSS', 'Spotify API', 'NEXT Auth'],
      projectLink: 'https://next-spotify-clone-xi.vercel.app/',
      link: 'https://github.com/ARJ2160/Next-Spotify-Clone'
    },
    {
      id: uuidv4(),
      title: 'IMDb Clone',
      image: Movies,
      description:
        'Built an IMDb website clone using the IMDb API with React JS for the front-end, Redux Toolkit for managing state, and Redux Thunk as middleware for the API calls',
      tags: ['React JS', 'Redux Toolkit', 'Redux Thunk', 'Sass'],
      projectLink: 'https://redux-movies-lemon.vercel.app/',
      link: 'https://github.com/ARJ2160/Redux-Movies'
    },
    {
      id: uuidv4(),
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
    },
    {
      id: uuidv4(),
      title: 'Samtej Industries LLP (Freelance Project)',
      image: Samtej,
      description: `Converted low fidelity designs to front-ends. Developed a static React JS website that helped bring the business online so users could browse through the company's various products.`,
      tags: ['React JS', 'Bootstrap 5'],
      projectLink: 'https://samtejllp.com/',
      link: 'https://github.com/ARJ2160/Samtej-React'
    }
  ],
  hero: {
    my_name_is: 'my name is',
    name: 'Atharva Joshi.',
    about_me: `I'm a React Developer who loves creating aesthetically pleasing front-ends. Currently, I'm focused on building my logic to the next level in basic Javascript. I aim to explore new and obscure languages and libraries like Haskell, GraphQL, Solidity, and Prisma. When I'm not coding, I'm probably listening to some hip-hop ;)`
  },
  about: {
    about_me: `Hey there! My name is Atharva, and I love creating sleek front-ends and high-performant back-ends for the web. I first started playing around with HTML and CSS in 2021, trying to recreate mockups from Tumblr, and since then, I have been making websites with React and MERN Stack. Nowadays, I'm trying to learn Flask, so I can be a Full-Stack developer. When I'm not coding my mind is on the business side of the spectrum, trying to understand the gist of business strategies and finance. I work at an IT firm called Apptware, where I work on web-apps and E-commerce websites used by local businesses.`,
    tech: `Here are some of the technologies I get to work with :`,
    tech_list: ['React Typescript', 'Storybook', 'Cypress', 'JavaScript ES6']
  }
};
