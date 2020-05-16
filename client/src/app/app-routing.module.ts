import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumListComponent } from '../app/components/museum-list/museum-list.component';
import { MuseumFormComponent } from '../app/components/museum-form/museum-form.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { LoginComponent } from './components/login/login.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
