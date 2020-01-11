import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LandingPageComponent
} from './views';


const routes: Routes = [
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
