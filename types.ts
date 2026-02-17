export interface Project {
  id: number;
  image?: string;
  video?: string;
  channelIcon: string;
  channelName: string;
  stats: string;
  link: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
