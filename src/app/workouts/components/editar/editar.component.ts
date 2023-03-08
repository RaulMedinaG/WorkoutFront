import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  workout:any = {name: '', mode: '', equipment: [], trainerTips: []}

  miFormulario: any = this.fb.group({
    name: '',
    mode: '',
    equipment: [],
    trainerTips: [],
  });

  constructor(private fb: FormBuilder, private service: WorkoutService, private activeRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(({id}) => {
      this.service.getOneWorkout(id).subscribe(response => {
        this.workout = response.data;

        this.miFormulario = this.fb.group({
          name: [this.workout.name, Validators.required],
          mode: [this.workout.mode, Validators.required],
          equipment: [this.workout.equipment.join(','), Validators.required],
          trainerTips: [this.workout.trainerTips.join(','), Validators.required],
        });
      });
    })
  }

  editar(id:string){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
    
    let workout = {
      name: this.miFormulario.value.name,
      mode: this.miFormulario.value.mode,
      equipment: this.miFormulario.value.equipment?.split(','),
      trainerTips: this.miFormulario.value.trainerTips?.split(',')
    }

    Swal.fire({
      title: '¿Estás seguro de que quieres editarlo?',
      showDenyButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.patchOneWorkout(id, workout).subscribe((response) =>console.log(response));
        this.router.navigate(['workouts/fitness']);
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })


  }

}
