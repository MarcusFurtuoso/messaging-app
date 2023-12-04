import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

export interface Contact {
  name: string;
  lastName: string;
  company: string;
  number: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  public contacts: Contact[] = [
    {
      name: 'Matt',
      lastName: 'Chorsey',
      company: 'Apple',
      number: '(79) 99827-2123',
      id: 0,
    },
    {
      name: 'Lauren',
      lastName: 'Ruthford',
      company: 'Microsoft',
      number: '(79) 99287-6521',
      id: 1,
    },
    {
      name: 'Jordan',
      lastName: 'Firth',
      company: 'OpenAI',
      number: '(79) 99726-0192',
      id: 2,
    },
    {
      name: 'Bill',
      lastName: 'Thomas',
      company: 'Amazon',
      number: '(79) 99726-0192',
      id: 3,
    },
    {
      name: 'Joanne',
      lastName: 'Pollan',
      company: 'Twitter',
      number: '(79) 99726-0192',
      id: 4,
    },
    {
      name: 'Andrea',
      lastName: 'Cornerston',
      company: 'Meta',
      number: '(79) 99726-0192',
      id: 5,
    },
    {
      name: 'Moe',
      lastName: 'Chamont',
      company: 'Facebook',
      number: '(79) 99726-0192',
      id: 5,
    },
    {
      name: 'Kelly',
      lastName: 'Richardson',
      company: 'Google',
      number: '(79) 99726-0192',
      id: 5,
    },
  ]

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }

  public getContacts(): Contact[] {
    return this.contacts;
  }

}
