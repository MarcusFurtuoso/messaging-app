import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-contact',
  templateUrl: './register-contact.component.html',
  styleUrls: ['./register-contact.component.css']
})
export class RegisterContactComponent {

  constructor(private router: Router) { }

  openPage(page: string) {
    switch (page) {
      case 'Done':
        this.router.navigate(['/home']);
        break;
      default:
    }
  }
}
