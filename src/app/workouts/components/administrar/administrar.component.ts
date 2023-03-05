import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css']
})
export class AdministrarComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name: ['name', Validators.required],
    mode: ['mode', Validators.required],
    equipment: ['equipment', Validators.required],
    exercises: ['exercises', Validators.required],
    trainertips: ['trainertips', Validators.required],
  })

  constructor(private fb: FormBuilder, private service: WorkoutService) { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
    this.service.postOneWorkout(this.miFormulario.value.name, this.miFormulario.value.mode, this.miFormulario.value.equipment, this.miFormulario.value.exercises, this.miFormulario.value.trainerTips).subscribe((response) => {
      console.log(response.data);
    });
  }

}