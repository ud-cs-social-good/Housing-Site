import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirebaseModule } from './firebase/firebase.module';
import {
  NavHeaderComponent,
} from './components/navigation';
import {
  LandingPageComponent,
  ForumsPageComponent,
} from './views';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    LandingPageComponent,
    ForumsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
