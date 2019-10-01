import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { MessagesService } from '~/app/messages/services/messages.service';
import { Observable, Subscription } from 'rxjs';

import { Message } from '~/app/shared/interface/message.interface';
import { map, tap } from 'rxjs/internal/operators';
import { Contact } from '~/app/shared/interface/contact.interface';
import { Chat } from '~/app/shared/interface/chat.interface';

@Component({
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss'],
})
export class MessageDetailComponent implements OnInit, OnDestroy {
  public chat$: Subscription;
  public contact: Contact;
  public messages$: Observable<Message[]>;

  public loading = true;

  // These are used to be able to count for 'more messages'. In real life this is probably done differently...
  private messages: Message[] = [];
  private chat: Partial<Chat> = {};

  constructor(
    private service: MessagesService,
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
  ) {}

  hasMoreMessages() {
    if (this.loading) {
      return false;
    }
    return this.service.getChatMessageCount(this.chat.id) > this.messages.length;
  }

  ngOnDestroy(): void {
    if (this.chat$) {
      this.chat$.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.chat$ = this.route.data
      .pipe(
        map(data => data.chat),
        tap(chat => (this.chat = chat)),
        tap(chat => (this.contact = chat.contact)),
      )
      .subscribe();

    this.messages$ = this.service.getChatMessages(this.route.snapshot.params.id).pipe(
      tap(messages => (this.messages = messages)),
      tap(() => (this.loading = false)),
    );
  }

  onBackTap(): void {
    this.routerExtensions.back();
  }

  isIncoming(message: Message) {
    return message.type === 'incoming';
  }

  isOutgoing(message: Message) {
    return message.type === 'outgoing';
  }
}
