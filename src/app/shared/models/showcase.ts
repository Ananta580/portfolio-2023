export interface ShowcaseSection {
  id: number;
  name: string;
  showCases: Showcase[];
}

export interface Showcase {
  id: number;
  isPrivate?: boolean;
  companyName?: string;
  image: string;
  title: string;
  bgClass?: string;
  subtitle?: string;
  responsibilities?: string[];
  learningOutcomes?: string[];
  skills?: ShowcaseSkill[];
  toolsAndPlatforms?: string[];
  softwareEngineeringSkills?: string[];
  role?: string;
  body?: string[];
  url: string;
  tags: string;
  workDone: string;
  workedDate: Date;
}

export interface ShowcaseSkill {
  name: string;
  list: string[];
}
