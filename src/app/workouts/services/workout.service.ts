import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workouts } from '../interfaces/workouts.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private httpClient:HttpClient) { }

  private url:string = "http://localhost:3000/api/v1/workouts";

  getAll():Observable<Workouts>{
    return this.httpClient.get<Workouts>(this.url);
  }

  postOneWorkout(workout:any):Observable<Workouts>{
    return this.httpClient.post<Workouts>(this.url, workout);
  }

  deleteOneWorkout(_id:any){
    return this.httpClient.delete(this.url +'/'+ _id);
  }

  patchOneWorkout(_id:String, body:any):Observable<Workouts>{
    return this.httpClient.patch<Workouts>(this.url +'/'+ _id, body);
  }

  getOneWorkout(_id:any):Observable<Workouts>{
    return this.httpClient.get<Workouts>(this.url +'/'+ _id);
  }

}