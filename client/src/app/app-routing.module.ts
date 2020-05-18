import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumListComponent } from '../app/components/museum-list/museum-list.component';
import { MuseumFormComponent } from '../app/components/museum-form/museum-form.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MymuseumListComponent } from './components/mymuseum-list/mymuseum-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
