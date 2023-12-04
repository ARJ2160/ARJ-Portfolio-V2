export interface ProjectCardProps {
  project: ProjectProps;
}
export interface ProjectProps {
  id: string;
  description: string;
  image: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  link: string;
  projectLink: string;
  tags: string[];
  title: string;
  backendLink?: string;
  underDevelopment?: boolean;
  originalWebsiteLink?: string;
}
export interface SkillProps {
  id: string;
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
