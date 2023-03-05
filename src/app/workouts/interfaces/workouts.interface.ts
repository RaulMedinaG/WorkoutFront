export interface Workouts {
    status: string;
    data:   Datum[];
}

export interface Datum {
    id:          string;
    name:        string;
    mode:        string;
    equipment:   string[] | string;
    exercises:   string[] | string;
    createdAt:   string;
    updatedAt?:  string;
    trainerTips: string[] | string;
    updateAt?:   string;
}