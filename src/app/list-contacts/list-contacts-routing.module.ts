import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListContactsComponent } from './list-contacts.component';

const routes: Routes = [
  {
    path: '',
    component: ListContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListContactsRoutingModule {}
