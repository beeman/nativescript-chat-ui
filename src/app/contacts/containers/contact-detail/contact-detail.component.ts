import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '~/app/shared/interface/contact.interface';

@Component({
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent implements OnInit {
  private contact: Contact;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.contact = this.route.snapshot.data.contact;
  }
}
