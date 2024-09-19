export interface Agenda {
  day: number;
  speaker: {
    image: string;
    name: string;
    title: string;
    company: string;
  };
  event: {
    title: string;
    description: string;
    time_start: string;
    time_end: string;
  };
}
