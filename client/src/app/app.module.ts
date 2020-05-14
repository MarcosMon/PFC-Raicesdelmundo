import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MuseumFormComponent } from './components/museum-form/museum-form.component';
import { MuseumListComponent } from './components/museum-list/museum-list.component';

import {MuseumsService} from './services/museums.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MuseumFormComponent,
    MuseumListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MuseumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
