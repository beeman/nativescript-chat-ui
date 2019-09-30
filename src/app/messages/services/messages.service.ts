import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Contact } from '~/app/shared/interface/contact.interface';
import { Message } from '~/app/shared/interface/message.interface';
import { Chat } from '~/app/shared/interface/chat.interface';
import { chatApi } from '~/app/shared/sample-data/sample-chats';
import { messageApi } from '~/app/shared/sample-data/sample-messages';
import { contactApi } from '~/app/shared/sample-data/sample-contacts';

@Injectable({ providedIn: 'root' })
export class MessagesService {
  getChats(): Observable<Chat[]> {
    return chatApi.getChats$();
  }
  getChat(id: string): Observable<Chat> {
    return chatApi.getChat$(id);
  }
  getContacts(): Observable<Contact[]> {
    return contactApi.getContacts$();
  }
  getContact(id: string): Observable<Contact> {
    return contactApi.getContact$(id);
  }
  getMessages(): Observable<Message[]> {
    return messageApi.getMessages$();
  }
  getMessage(id: string): Observable<Message> {
    return messageApi.getMessage$(id);
  }
  getChatMessages(id: string): Observable<Message[]> {
    return messageApi.getChatMessages$(id);
  }
  getChatMessageCount(id: string) {
    return messageApi.getChatMessageCount(id);
  }
}
