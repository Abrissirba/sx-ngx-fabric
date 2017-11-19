import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalloutComponent } from './callout.component';
import { CalloutTriggerDirective } from './callout-trigger.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalloutComponent,
    CalloutTriggerDirective
  ],
  exports: [
    CalloutComponent,
    CalloutTriggerDirective
  ]
})
export class CalloutModule { }
