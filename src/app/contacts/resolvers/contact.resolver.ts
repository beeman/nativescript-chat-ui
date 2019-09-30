import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Contact } from '~/app/shared/interface/contact.interface';
import { MessagesService } from '~/app/messages/services/messages.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactResolver implements Resolve<Contact> {
  constructor(private service: MessagesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Contact> {
    return this.service.getContact(route.params.id);
  }
}
