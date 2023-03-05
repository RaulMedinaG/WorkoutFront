import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsRoutingModule } from './workouts-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { AdministrarComponent } from './components/administrar/administrar.component';
import { FitnessComponent } from './components/fitness/fitness.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
    ContactoComponent,
    AdministrarComponent,
    FitnessComponent
  ],
  imports: [
    CommonModule,
    WorkoutsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class WorkoutsModule { }
