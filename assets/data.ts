import {
  Apollo,
  CSS3,
  Bootstrap,
  ReactIcon,
  NEXTJS,
  Typescript,
  Javascript,
  MaterialUI,
  Storybook,
  Redux,
  Tailwind,
  GraphQL,
  MongoDB,
  Express,
  HTML5,
  BlogWebsite,
  Form,
  GitHub,
  Lusion,
  Movies,
  Spotify,
  Docker,
  Gitlab,
  Zustand,
  Jenkins,
  Vite,
  MITScratchClone,
  MiltonFramer,
  Framer,
  Stripe,
  SpotifyLogo,
  Node
} from '../images/images';

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
      'https://drive.google.com/file/d/1UHdH9ePNuutEvVT5Df--B3T_wFJE6C65/view?usp=sharing',
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
      skillName: 'Node JS',
      skillIcon: Node
    },
    {
      skillName: 'JavaScript',
      skillIcon: Javascript
    },
    {
      skillName: 'Redux',
      skillIcon: Redux
    },
    {
      skillName: 'Docker',
      skillIcon: Docker
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
      skillName: 'Material UI',
      skillIcon: MaterialUI
    },
    {
      skillName: 'Storybook',
      skillIcon: Storybook
    },
    {
      skillName: 'GraphQL',
      skillIcon: GraphQL
    },
    {
      skillName: 'Apollo GraphQL',
      skillIcon: Apollo
    },
    // {
    //   skillName: 'Jenkins',
    //   skillIcon: Jenkins
    // },
    {
      skillName: 'Tailwind CSS',
      skillIcon: Tailwind
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
    },
    {
      skillName: 'GitLab',
      skillIcon: Gitlab
    }
  ],
  projects: [
    {
      title: 'Next JS Blog V2',
      image: BlogWebsite,
      description:
        'Built a blog website using NEXT JS and Tailwind CSS for the Frontend. Developed a RESTful Express Backend along with a MongoDB database. Implemented OAuth for GitHub and Google. Built a Jenkins pipeline to build and push a new build with every commit',
      tags: [
        {
          name: 'Next JS',
          icon: NEXTJS
        },
        {
          name: 'Typescript',
          icon: Typescript
        },
        {
          name: 'NextAuth'
        },
        {
          name: 'Zustand',
          icon: Zustand
        },
        {
          name: 'Express JS',
          icon: Express
        },
        {
          name: 'MongoDB',
          icon: MongoDB
        },
        {
          name: 'Mongoose'
        },
        {
          name: 'Jenkins',
          icon: Jenkins
        },
        {
          name: 'Docker',
          icon: Docker
        }
      ],
      projectLink: 'https://blog-v2-olive.vercel.app/',
      link: 'https://github.com/ARJ2160/Blog-V2',
      backendLink: 'https://github.com/ARJ2160/React-Blog-Backend'
    },
    {
      title: 'MIT Scratch Clone',
      image: MITScratchClone,
      description: `Developed a clone of the MIT Scratch website with React flow nodes in place of blocks. Used Custom events to control execution of connected blocks using custom events.`,
      tags: [
        {
          name: 'Vite',
          icon: Vite
        },
        {
          name: 'React JS',
          icon: ReactIcon
        },
        {
          name: 'React Flow'
        },
        {
          name: 'Tailwind CSS',
          icon: Tailwind
        },
        {
          name: 'React Custom Events'
        }
      ],
      projectLink: 'https://cool-twilight-ce65a1.netlify.app/',
      link: 'https://github.com/ARJ2160/MIT-Scratch-Clone',
      originalWebsiteLink: 'https://scratch.mit.edu/projects/editor/'
    },
    {
      title: 'Framer Milton Clone',
      image: MiltonFramer,
      description: `Developed a clone of Milton Framer website using Vite and Tailwind CSS. Used Framer motion to add animation effects.`,
      tags: [
        {
          name: 'Vite',
          icon: Vite
        },
        {
          name: 'React JS',
          icon: ReactIcon
        },
        {
          name: 'Framer Motion',
          icon: Framer
        },
        {
          name: 'Tailwind CSS',
          icon: Tailwind
        }
      ],
      projectLink: 'https://milton-framer-template.vercel.app/',
      link: 'https://github.com/ARJ2160/Milton-Framer-Template',
      originalWebsiteLink: 'https://culture-breathe-337021.framer.app/'
    },
    {
      title: 'Lusion React + Tailwind Clone',
      image: Lusion,
      description: `Developed an emulation of the "Lusion" website using React and Tailwind. Integrated a cart functionality with Stripe API for payments`,
      tags: [
        {
          name: 'React JS',
          icon: ReactIcon
        },
        {
          name: 'Tailwind CSS',
          icon: Tailwind
        },
        {
          name: 'Stripe API',
          icon: Stripe
        }
      ],
      projectLink: 'https://tailwind-lusion.vercel.app/',
      link: 'https://github.com/ARJ2160/Tailwind-Lusion',
      originalWebsiteLink: 'https://aht-lusion.myshopify.com/'
    },
    {
      title: 'NEXT JS Spotify Clone',
      image: Spotify,
      description:
        'Created a clone of the Spotify website with NEXT JS, Tailwind CSS, NEXT Auth, and Spotify API. Users can sign in using OAuth and control their own spotify player with the web app.',
      tags: [
        {
          name: 'Next JS',
          icon: NEXTJS
        },
        ,
        {
          name: 'Tailwind CSS',
          icon: Tailwind
        },
        {
          name: 'Spotify API',
          icon: SpotifyLogo
        },
        {
          name: 'NEXT Auth'
        }
      ],
      projectLink: 'https://next-spotify-clone-xi.vercel.app/',
      link: 'https://github.com/ARJ2160/Next-Spotify-Clone'
    },
    {
      title: 'IMDb Clone',
      image: Movies,
      description:
        'Built an IMDb website clone using the TMDb API with React JS and NEXT UI for the front-end, Redux Toolkit for managing state, and Redux Thunk as middleware for the API calls',
      tags: [
        {
          name: 'Vite JS',
          icon: Vite
        },
        {
          name: 'Typescript',
          icon: Typescript
        },
        {
          name: 'Tailwind CSS',
          icon: Tailwind
        },
        {
          name: 'Next UI'
        },
        {
          name: 'Redux Toolkit',
          icon: Redux
        },
        {
          name: 'Redux Thunk',
          icon: Redux
        }
      ],

      projectLink: 'https://redux-movies-lemon.vercel.app/',
      link: 'https://github.com/ARJ2160/Redux-Movies'
    },
    {
      title: 'Redux Authentication System',
      image: Form,
      description:
        'Created an Authentication Flow System using React JS for the front-end and Redux Toolkit to manage state.',
      tags: [
        {
          name: 'React JS',
          icon: ReactIcon
        },
        {
          name: 'Redux',
          icon: Redux
        },
        {
          name: 'Redux Toolkit',
          icon: Redux
        },
        {
          name: 'Redux Persist',
          icon: Redux
        },
        {
          name: 'MD5 Hashing'
        }
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
    about_me: `Hey there! My name is Atharva, and I love creating sleek front-ends and high-performant back-ends for the web. I first started playing around with HTML and CSS in 2021, trying to recreate mockups from Tumblr, and since then, I have been making websites with React and MERN Stack. Nowadays, I'm trying to learn System Design, so I can be a Full-Stack developer.`,
    tech: `Here are some of the technologies I get to work with :`,
    tech_list: [
      'React Typescript',
      'Storybook',
      'Cypress',
      'JavaScript',
      'Node JS',
      'MongoDB'
    ]
  }
};
