import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { routes } from './profile.routing';
import { ProfileComponent } from './containers/profile.component';
import { NativeScriptRouterModule } from 'nativescript-angular';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [ProfileComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProfileModule {}
