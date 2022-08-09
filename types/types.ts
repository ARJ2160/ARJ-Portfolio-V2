export interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    projectLink: string;
    link: string;
    image: {
      src: string;
      height: number;
      width: number;
      blurDataURL?: string;
    };
  };
}
export interface ProjectProps {
  id: number;
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
}
export interface SkillProps {
  id: number;
  skillName: string;
  skillIcon: {
    height: number;
    src: string;
    width: number;
  };
}
export interface SkillCardProps {
  id: number;
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