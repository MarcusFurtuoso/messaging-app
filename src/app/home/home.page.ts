import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService, Message } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  constructor(
    private router: Router,
    ) {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  openPage(page: string) {
    switch (page) {
      case 'Contacts':
        this.router.navigate(['/contact']);
        break;
      default:
    }
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
}
