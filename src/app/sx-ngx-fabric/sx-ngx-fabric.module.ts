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

@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule,
    TextFieldModule,
    DialogModule.forRoot(),
    ToggleModule,
    BreadcrumbModule
  ],
  exports: [
    CheckboxModule,
    ButtonModule,
    TextFieldModule,
    DialogModule,
    ToggleModule,
    BreadcrumbModule
  ]
})
export class SxNgxFabricModule { }
