import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterContactComponent } from './register-contact.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterContactRoutingModule {}
