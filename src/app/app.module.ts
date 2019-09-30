import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { LabelMaxLinesDirective } from '~/app/shared/directives/label-max-lines.directive';
import { routes } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptRouterModule.forRoot(routes)],
  declarations: [AppComponent],
  providers: [LabelMaxLinesDirective],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
