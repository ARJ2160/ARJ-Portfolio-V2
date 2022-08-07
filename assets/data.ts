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
import Purescript from '../images/Skill SVGs/purescript.svg';
import Storybook from '../images/Skill SVGs/storybook.svg';

export const data = {
  social: {
    GitHub: 'https://github.com/ARJ2160',
    LinkedIn: 'https://www.linkedin.com/in/arj2160/',
    Twitter: 'https://twitter.com/Atharvaj2160',
    Email: 'atharvaj2160@gmail.com',
    Resume:
      'https://app.enhancv.com/share/039ec1fe/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic',
    Spotify:
      'https://open.spotify.com/playlist/52gtDapY50kKkLEnnnvYgz?si=89f44d4ce2944b91'
  },
  skills: [
    {
      id: 20,
      skillName: 'NEXT JS',
      skillIcon: NEXTJS
    },
    {
      id: 1,
      skillName: 'React JS',
      skillIcon: ReactIcon
    },
    {
      id: 2,
      skillName: 'Typescript',
      skillIcon: Typescript
    },
    {
      id: 333,
      skillName: 'Purescript',
      skillIcon: Purescript
    },
    {
      id: 5,
      skillName: 'JavaScript',
      skillIcon: Javascript
    },
    {
      id: 21,
      skillName: 'Storybook',
      skillIcon: Storybook
    },
    {
      id: 4,
      skillName: 'Redux',
      skillIcon: Redux
    },
    {
      id: 3,
      skillName: 'Tailwind CSS',
      skillIcon: Tailwind
    },
    {
      id: 6,
      skillName: 'GraphQL',
      skillIcon: GraphQL
    },
    {
      id: 7,
      skillName: 'Apollo GraphQL',
      skillIcon: Apollo
    },
    {
      id: 8,
      skillName: 'MongoDB',
      skillIcon: MongoDB
    },
    {
      id: 9,
      skillName: 'Express',
      skillIcon: Express
    },
    {
      id: 10,
      skillName: 'HTML 5',
      skillIcon: HTML5
    },
    {
      id: 11,
      skillName: 'Bootstrap',
      skillIcon: Bootstrap
    },
    {
      id: 12,
      skillName: 'CSS 3',
      skillIcon: CSS3
    },
    {
      id: 13,
      skillName: 'GitHub',
      skillIcon: GitHub
    }
  ],
  projects: [
    {
      id: 1,
      title: 'Lusion React + Tailwind Clone',
      image: Lusion,
      description: `An emulation of the "Lusion" website using React and Tailwind`,
      tags: ['React JS', 'Tailwind CSS', 'Stripe API'],
      projectLink: 'https://tailwind-lusion.vercel.app/',
      link: 'https://github.com/ARJ2160/Tailwind-Lusion'
    },
    {
      id: 2,
      title: 'NEXT JS Spotify Clone',
      image: Spotify,
      description:
        'Created a clone of the Spotify website with NEXT JS, Tailwind CSS, NEXT Auth, and Spotify API.',
      tags: ['NEXT JS', 'Tailwind CSS', 'Spotify API', 'NEXT Auth'],
      projectLink: 'https://next-spotify-clone-xi.vercel.app/',
      link: 'https://github.com/ARJ2160/Next-Spotify-Clone'
    },
    {
      id: 3,
      title: 'IMDb Clone',
      image: Movies,
      description:
        'Built an IMDb website clone using the IMDb API with React JS for the front-end and Redux Toolkit for managing state.',
      tags: ['React JS', 'Redux Toolkit', 'Redux Thunk', 'Sass'],
      projectLink: 'https://redux-movies-lemon.vercel.app/',
      link: 'https://github.com/ARJ2160/Redux-Movies'
    },
    {
      id: 4,
      title: 'Redux Authentication System',
      image: Form,
      description:
        'Created an Authentication Flow System using React JS and used Redux Toolkit for managing state.',
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
      id: 5,
      title: 'Samtej Industries LLP',
      image: Samtej,
      description:
        'Converted low fidelity designs to front-ends. Developed a static React JS website that helped bring the business online so users could browse through the various products the company offers.',
      tags: ['React JS', 'Bootstrap 5'],
      projectLink: 'https://samtejllp.com/',
      link: 'https://github.com/ARJ2160/Samtej-React'
    },
    {
      id: 6,
      title: 'React Blog',
      image: BlogWebsite,
      description:
        'A blog website built using React and Tailwind CSS which allows the user to view blogs written by the users with admin access.',
      tags: [
        'React JS',
        'Redux',
        'Redux Toolkit',
        'MD5 Hashing',
        'Express JS',
        'MongoDB',
        'Mongoose'
      ],
      projectLink: 'https://github.com/ARJ2160/React-Blog',
      link: 'https://github.com/ARJ2160/React-Blog'
    }
  ],
  hero: {
    my_name_is: 'my name is',
    name: 'Atharva Joshi.',
    subText: 'I build stuff for the web.',
    about_me: `I'm a React Developer who loves creating aesthetically pleasing
    front-ends. Currently I'm focused on building my logic to the next level
    in basic Javascript. I aim on exploring new and obscure langauges like
    Haskell, GraphQL, Solidity, Prisma. When I'm not coding I'm probably
    listening to some hip-hop ;)`
  },
  about: {
    about_me: `Hey there! My name is Atharva and I love creating sleek front-ends
    along with high performant back-end for the web. I first started playing
    around with HTML and CSS back in 2021, trying to recreate mockups from
    Tumblr and since then I have fallen in love with React and MERN Stack.
    What amazes me is the sheer simplicity and weirdness of JavaScript. Nowadays, my mind is on the business side of the spectrum, trying to understand the gist of business
    strategies and financing. I work at an IT Company called Apptware where I get to work on everything, from an E-commerce website to web apps used by Data Scientists.`,
    tech: `Here are some of the technologies I get to work with :`,
    tech_list: ['React Typescript', 'Storybook', 'Cypress', 'JavaScript ES6']
  }
};
