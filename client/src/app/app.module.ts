import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MuseumFormComponent } from './components/museum-form/museum-form.component';
import { MuseumListComponent } from './components/museum-list/museum-list.component';

import {MuseumsService} from './services/museums.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MymuseumListComponent } from './components/mymuseum-list/mymuseum-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MuseumFormComponent,
    MuseumListComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    MymuseumListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    MuseumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
