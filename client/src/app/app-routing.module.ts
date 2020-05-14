import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumListComponent } from '../app/components/museum-list/museum-list.component';
import { MuseumFormComponent } from '../app/components/museum-form/museum-form.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
