import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { routes } from './profile.routing';
import { ProfileIndexComponent } from './containers/profile-index.component';
import { NativeScriptRouterModule } from 'nativescript-angular';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [ProfileIndexComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProfileModule {}
