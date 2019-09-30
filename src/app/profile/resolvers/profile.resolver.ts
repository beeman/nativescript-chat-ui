import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Contact } from '~/app/shared/interface/contact.interface';
import { MessagesService } from '~/app/messages/services/messages.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileResolver implements Resolve<Contact> {
  constructor(private service: MessagesService) {}

  resolve(): Observable<Contact> {
    return this.service.getContact('you');
  }
}
