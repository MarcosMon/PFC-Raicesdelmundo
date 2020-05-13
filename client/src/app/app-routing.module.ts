import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumListComponent } from '../app/components/museum-list/museum-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/museums',
    pathMatch: 'full'
  },
  {
    path: 'museums',
    component: MuseumListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
