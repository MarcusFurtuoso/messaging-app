import { Component, Input } from '@angular/core';
import { Contact } from '../services/data.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent {
  @Input() contact?: Contact;

  constructor() {}
}
