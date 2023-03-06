export interface Workouts {
    status: string;
    data:   Datum[];
}

export interface Datum {
    _id:         string;
    name:        string;
    mode:        string;
    equipment:   string[];
    trainerTips: string[];
}
