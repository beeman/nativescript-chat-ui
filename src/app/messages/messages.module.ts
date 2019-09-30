import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { routes } from './messages.routing';

import { LabelMaxLinesDirective } from '~/app/shared/directives/label-max-lines.directive';
import { MessageListComponent } from './containers/message-list/message-list.component';
import { MessageDetailComponent } from './containers/message-detail/message-detail.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [MessageListComponent, MessageDetailComponent],
  providers: [LabelMaxLinesDirective],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MessagesModule {}
