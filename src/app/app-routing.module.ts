import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FitnessComponent } from './fitness/fitness.component';



const routes: Routes = [
    {path:'',component:FitnessComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  