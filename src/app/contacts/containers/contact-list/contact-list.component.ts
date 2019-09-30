import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MessagesService } from '~/app/messages/services/messages.service';
import { Contact } from '~/app/shared/interface/contact.interface';

@Component({
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  items$: Observable<Contact[]>;

  constructor(private service: MessagesService) {}

  ngOnInit(): void {
    this.items$ = this.service.getContacts();
  }}
