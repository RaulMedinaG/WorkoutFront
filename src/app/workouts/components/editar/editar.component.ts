import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
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

  constructor(private fb: FormBuilder, private service: WorkoutService, private activeRouter:ActivatedRoute) { }

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

    this.service.patchOneWorkout(id, workout).subscribe(response => {
      console.log(response);
    })

  }

}
