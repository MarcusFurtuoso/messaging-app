import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ListContactsModule } from '../list-contacts/list-contacts.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ContactRoutingModule,
    ListContactsModule,
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
