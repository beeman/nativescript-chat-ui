import { Routes } from '@angular/router';

import { ContactListComponent } from './containers/contact-list/contact-list.component';
import { ContactDetailComponent } from '~/app/contacts/containers/contact-detail/contact-detail.component';
import { ContactResolver } from '~/app/contacts/resolvers/contact.resolver';

export const routes: Routes = [
  { path: '', component: ContactListComponent },
  {
    path: ':id',
    component: ContactDetailComponent,
    resolve: {
      contact: ContactResolver,
    },
  },
];
