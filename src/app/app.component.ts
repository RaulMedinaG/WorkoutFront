import { Component } from '@angular/core';
import { WorkoutService } from './workouts/services/workout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WorkoutExample';

  constructor(private service:WorkoutService){  
    this.service.getAll();    
    // this.service.postOneWorkout();
  }

}