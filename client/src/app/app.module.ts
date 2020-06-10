import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MuseumDetailsComponent } from './components/museum-details/museum-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommentsComponent } from './components/comments/comments.component';
import { MuseumsKpiComponent } from './components/museums-kpi/museums-kpi.component';
import { ChartsModule } from 'ng2-charts';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MuseumFormComponent,
    MuseumListComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    MymuseumListComponent,
    MuseumDetailsComponent,
    FooterComponent,
    CommentsComponent,
    MuseumsKpiComponent,
    HeaderNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ChartsModule,
    ReactiveFormsModule,
  ],
  providers: [
    MuseumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
