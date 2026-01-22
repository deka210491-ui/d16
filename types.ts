
export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface AgendaItem {
  time: string;
  content: string;
  subContent?: string[];
  note?: string;
}
