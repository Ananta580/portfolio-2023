export interface ShowcaseSection {
  id: number;
  name: string;
  showCases: Showcase[];
}

export interface Showcase {
  image: string;
  title: string;
  url: string;
  tags: string;
  workDone: string;
  workedDate: Date;
}
