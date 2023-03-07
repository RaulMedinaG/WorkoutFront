import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { Datum } from '../../interfaces/workouts.interface';
import Swal from 'sweetalert2';

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

  eliminar(id:any){
    Swal.fire({
      title: '¿Estás seguro de que quieres eliminarlo?',
      showDenyButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('¡Hecho!', '', 'success');
        this.service.deleteOneWorkout(id).subscribe(() => this.Workouts());
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })    
  }
}
