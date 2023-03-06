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
      this.service.getOneWorkout(id).subscribe((response) => {
        this.workout = response;
        this.miFormulario = this.fb.group({
          name: [, Validators.required],
          mode: [, Validators.required],
          equipment: [, Validators.required],
          trainerTips: [, Validators.required],
        });
      });
    })
  }

  editar(id:any){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
    
    let workout = {
      name: this.miFormulario.value.name,
      mode: this.miFormulario.value.mode,
      equipment: this.miFormulario.value.equipment.split(','),
      trainerTips: this.miFormulario.value.equipment.split(',')
    }

    this.service.patchOneWorkout(workout, id).subscribe(response => {
      console.log(response);
    })

  }

}
