import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { routes } from './contacts.routing';

import { ContactDetailComponent } from './containers/contact-detail/contact-detail.component';
import { ContactListComponent } from './containers/contact-list/contact-list.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [ContactDetailComponent, ContactListComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ContactsModule {}
