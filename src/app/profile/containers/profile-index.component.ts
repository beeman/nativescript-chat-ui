import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '~/app/shared/interface/contact.interface';

@Component({
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index.component.scss'],
})
export class ProfileIndexComponent implements OnInit {
  private profile: Contact;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.profile = this.route.snapshot.data.profile;
  }
}
