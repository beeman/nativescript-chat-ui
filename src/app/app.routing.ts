import { Routes } from '@angular/router';
import { NSEmptyOutletComponent } from 'nativescript-angular';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/(messagesTab:messages//contactsTab:contacts//profileTab:profile)',
    pathMatch: 'full',
  },
  {
    path: 'messages',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/messages/messages.module').then(m => m.MessagesModule),
    outlet: 'messagesTab',
  },
  {
    path: 'contacts',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/contacts/contacts.module').then(m => m.ContactsModule),
    outlet: 'contactsTab',
  },
  {
    path: 'profile',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/profile/profile.module').then(m => m.ProfileModule),
    outlet: 'profileTab',
  },
];
