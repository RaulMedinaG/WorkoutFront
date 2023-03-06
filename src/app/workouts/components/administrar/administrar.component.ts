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
    name: ['', Validators.required],
    mode: ['', Validators.required],
    equipment: ['', Validators.required],
    trainerTips: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private service: WorkoutService) { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
    
    let workout = {
      name: this.miFormulario.value.name,
      mode: this.miFormulario.value.mode,
      equipment: this.miFormulario.value.equipment.split(','),
      trainerTips: this.miFormulario.value.equipment.split(',')
    }
    
    this.service.postOneWorkout(workout).subscribe((response) => {
      console.log(response);
    });
  }

}