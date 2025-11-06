export interface AgendaDetail {
  time_start: string;
  time_end: string | null;
  title: string;
  speakers: string[] | null;
  type: "break" | "sponsors" | "keynote" | "talks" | "others";
}

export interface Agenda {
  day: string;
  date: string;
  active: boolean;
  agendas: AgendaDetail[];
}
