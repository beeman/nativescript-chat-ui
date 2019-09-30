import { Routes } from '@angular/router';

import { ChatResolver } from '~/app/messages/resolvers/chat.resolver';

import { MessageListComponent } from './containers/message-list/message-list.component';
import { MessageDetailComponent } from './containers/message-detail/message-detail.component';

export const routes: Routes = [
  { path: '', component: MessageListComponent },
  { path: ':id', component: MessageDetailComponent, resolve: { chat: ChatResolver } },
];
