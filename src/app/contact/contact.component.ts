import { Component, inject } from '@angular/core';
import { Contact, DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private data = inject(DataService);
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  openPage(page: string) {
    switch (page) {
      case 'New contact':
        this.router.navigate(['/register-contact']);
        break;
      default:
    }
  }

  getContacts(): Contact[] {
    return this.data.getContacts();
  }
}
