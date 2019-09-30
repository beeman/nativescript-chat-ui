import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { Observable } from 'rxjs';

import { MessagesService } from '~/app/messages/services/messages.service';
import { Chat } from '~/app/shared/interface/chat.interface';

@Component({
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent implements OnInit {
  items$: Observable<Chat[]>;

  constructor(private service: MessagesService, private router: RouterExtensions) {}

  ngOnInit(): void {
    this.items$ = this.service.getChats();
  }
}
