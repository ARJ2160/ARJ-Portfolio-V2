export interface ProjectCardProps {
  project: ProjectProps;
}
export interface ProjectProps {
  description: string;
  image: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  link: string;
  projectLink: string;
  tags: ({ name: string; icon?: any } | undefined)[];
  title: string;
  backendLink?: string;
  underDevelopment?: boolean;
  originalWebsiteLink?: string;
}
export interface SkillProps {
  skillName: string;
  skillIcon: {
    height: number;
    src: string;
    width: number;
  };
}
export interface SocialMediaProps {
  GitHub: string;
  LinkedIn: string;
  Twitter: string;
  Email: string;
  Resume: string;
  Spotify: string;
}
