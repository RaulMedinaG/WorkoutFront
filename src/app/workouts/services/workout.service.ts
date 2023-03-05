import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workouts } from '../interfaces/workouts.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private httpClient:HttpClient) { }

  private url:string = "http://localhost:3000/api/v1/workouts/";

  private postId:number = 0;

  private ejercicio1 = {
    name: "Core Buster",
    mode: "AMRAP 20",
    equipment: [
      "rack",
      "barbell",
      "abmat"
    ],
    exercises: [
        "15 toes to bars",
        "10 thrusters",
        "30 abmat sit-ups"
    ],
    trainerTips: [
        "Split your toes to bars in two sets maximum",
        "Go unbroken on the thrusters",
        "Take the abmat sit-ups as a chance to normalize your breath"
    ]
  }

  getAll():Observable<Workouts>{
    return this.httpClient.get<Workouts>(this.url);
  }

  postOneWorkout(name:string, mode:string, equipment:string[], exercises: string[], trainerTips: string[]):Observable<Workouts>{
    return this.httpClient.post<Workouts>(this.url, {'name':name, 'mode': mode, 'equipment': equipment, 'exercises': exercises, 'trainerTips': trainerTips});
  }

}