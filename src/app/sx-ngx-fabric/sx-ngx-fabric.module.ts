import { NavModule } from './nav/nav.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { ToggleModule } from './toggle/toggle.module';
import { TextFieldModule } from './text-field/text-field.module';
import { ButtonModule } from './button/button.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { DialogModule } from './dialog/dialog.module';
import { PortalModule } from '@angular/cdk/portal';
import { CalloutModule } from './callout/callout.module';

@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule,
    TextFieldModule,
    DialogModule.forRoot(),
    ToggleModule,
    BreadcrumbModule,
    CalloutModule,
    NavModule
  ],
  exports: [
    CheckboxModule,
    ButtonModule,
    TextFieldModule,
    DialogModule,
    ToggleModule,
    BreadcrumbModule,
    CalloutModule,
    NavModule
  ]
})
export class SxNgxFabricModule { }
