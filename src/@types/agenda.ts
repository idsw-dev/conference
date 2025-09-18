export interface AgendaDetail {
  time_start: string;
  time_end: string;
  title: string;
  speakers: {
    imageName: string;
    name: string;
    title: string;
    company: string;
  }[];
}
export interface Agenda {
  day: string;
  agendas: AgendaDetail[];
  active: boolean;
  event: {
    title: string;
    description: string;
    time_start: string;
    time_end: string;
  };
}
