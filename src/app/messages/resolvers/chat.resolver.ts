import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Chat } from '~/app/shared/interface/chat.interface';
import { MessagesService } from '~/app/messages/services/messages.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatResolver implements Resolve<Chat> {
  constructor(private service: MessagesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Chat> {
    return this.service.getChat(route.params.id);
  }
}
