import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  NavHeaderComponent
} from './components/navigation';

import {
  LandingPageComponent
} from './views';
import { ForumsPageComponent } from './views/forums-page/forums-page.component';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
