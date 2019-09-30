import { Routes } from '@angular/router';

import { ProfileIndexComponent } from './containers/profile-index.component';
import { ProfileResolver } from '~/app/profile/resolvers/profile.resolver';

export const routes: Routes = [
  {
    path: '',
    component: ProfileIndexComponent,
    resolve: {
      profile: ProfileResolver,
    },
  },
];
