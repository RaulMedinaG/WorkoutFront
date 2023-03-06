import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsRoutingModule } from './workouts-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { AdministrarComponent } from './components/administrar/administrar.component';
import { FitnessComponent } from './components/fitness/fitness.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './components/editar/editar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    InicioComponent,
    ContactoComponent,
    AdministrarComponent,
    FitnessComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    WorkoutsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class WorkoutsModule { }
