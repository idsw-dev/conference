export interface Speaker {
  name: string;
  title: string;
  imageName: string;
  type: "keynote" | "regular" | "talkshow";
  socialUrl: string[];
  bio?: string;
  talk: {
    title: string;
    description: string;
    topics: string[];
  } | null;
}
