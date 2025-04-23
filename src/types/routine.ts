export interface Routine {
  id: string;
  name: string;
  days: Days[];
  description?: string;
  createdAt: string;
  colour: Colour;
}

export enum Days {
  Monday = 0,
  Tuesday = 1,
  Wednesday = 2,
  Thursday = 3,
  Friday = 4,
  Saturday = 5,
  Sunday = 6,
}

export enum Colour {
  Red = "red",
  Blue = "blue",
  Green = "green",
  Yellow = "yellow",
  Purple = "purple",
}
export interface Completion {
  routineId: string;
  date: string; // YYYY-MM-DD
}
