import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { routes } from './contacts.routing';
import { ContactsListComponent } from './containers/contacts-list.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [ContactsListComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ContactsModule {}
