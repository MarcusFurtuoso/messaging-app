import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RegisterContactComponent } from './register-contact.component';
import { RegisterContactRoutingModule } from './register-contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RegisterContactRoutingModule,
  ],
  declarations: [RegisterContactComponent]
})
export class RegisterContactModule { }
