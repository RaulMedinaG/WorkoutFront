import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { Datum } from '../../interfaces/workouts.interface';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit {

  workouts!: Datum[];
  copiaWorkouts!: Datum[];

  constructor(private service: WorkoutService) { }

  ngOnInit(): void {
    this.Workouts();
  }

  Workouts(){
    return this.service.getAll().subscribe(response => {
      this.workouts = response.data;
      this.copiaWorkouts = response.data;
    })
  }

  buscar($event: any){
    
    if($event.target.value.length>=2){

      this.workouts = this.copiaWorkouts.filter(workout => workout.name.toLocaleLowerCase().includes($event.target.value.toLocaleLowerCase()) )

    } else {
      this.workouts = this.copiaWorkouts;
    }

  }

}
