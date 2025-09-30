export interface Speaker {
  name: string;
  title: string;
  imageName: string;
  isKeynoteSpeakers: boolean;
  socialUrl: string[];
  bio?: string;
  talk: {
    title: string;
    description: string;
    topics: string[];
  } | null;
}
