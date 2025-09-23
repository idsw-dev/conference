export interface Speaker {
  name: string;
  title: string;
  imageName: string;
  role: string;
  socialUrl: string[];
  talk: {
    title: string;
    description: string;
    topics: string[];
  };
}
