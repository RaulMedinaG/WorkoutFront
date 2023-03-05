import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarComponent } from './components/administrar/administrar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FitnessComponent } from './components/fitness/fitness.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "administrar",
        component: AdministrarComponent
      },
      {
        path: "inicio",
        component: InicioComponent
      },
      {
        path: "fitness",
        component: FitnessComponent
      },
      {
        path: "contacto",
        component: ContactoComponent
      },
      {
        path:"**",
        redirectTo:"inicio"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutsRoutingModule { }