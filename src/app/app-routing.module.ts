import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutsModule } from './workouts/workouts.module';

const routes: Routes = [
  {
    path: "workouts",
    loadChildren: () => import("./workouts/workouts.module").then(response => WorkoutsModule)
  },
  {
    path: "**",
    redirectTo: "workouts"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
