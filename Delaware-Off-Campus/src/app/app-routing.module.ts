import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ForumsPageComponent,
  LandingPageComponent
} from './views';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'forum', component: ForumsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
