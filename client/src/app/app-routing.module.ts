import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumListComponent } from '../app/components/museum-list/museum-list.component';
import { MuseumFormComponent } from '../app/components/museum-form/museum-form.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MymuseumListComponent } from './components/mymuseum-list/mymuseum-list.component';
import { MuseumDetailsComponent } from './components/museum-details/museum-details.component';
import { MuseumsKpiComponent } from './components/museums-kpi/museums-kpi.component';
import { TicketsComponent } from './components/tickets/tickets.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/museums',
    pathMatch: 'full'
  },
  {
    path: 'museums',
    component: MuseumListComponent
  },
  {
    path: 'users/museums/:id',
    component: MymuseumListComponent
  },
  {
    path: 'details/museums/:id',
    component: MuseumDetailsComponent
  },
  {
    path: 'museums/add',
    component: MuseumFormComponent
  },
  {
    path: 'museums/edit/:id',
    component: MuseumFormComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'users/kpi/:id',
    component: MuseumsKpiComponent
  },
  {
    path: 'tickets',
    component: TicketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
