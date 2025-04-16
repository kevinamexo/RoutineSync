export interface Routine {
    id: string;
    name:string;
    days: Days[];
    description?:string;
    createdAt:string;
}

export type Days = 1|2|3|4|5|6|7;

export interface Completion{
    routineId:string;
    date:string; // YYYY-MM-DD
}