import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoCheckboxComponent } from './components/demo-checkbox/demo-checkbox.component';
import { SxNgxFabricModule } from '../sx-ngx-fabric/sx-ngx-fabric.module';
import { DemoNavigationComponent } from './components/demo-navigation/demo-navigation.component';
import { DemoHomeComponent } from './components/demo-home/demo-home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DemoButtonComponent } from './components/demo-button/demo-button.component';
import { DemoTextFieldComponent } from './components/demo-text-field/demo-text-field.component';
import { DemoDialogComponent } from './components/demo-dialog/demo-dialog.component';
import { ExampleDialogComponent } from './components/demo-dialog/example-dialog/example-dialog.component';
import { DemoToggleComponent } from './components/demo-toggle/demo-toggle.component';
import { DemoBreadcrumbComponent } from './components/demo-breadcrumb/demo-breadcrumb.component';
import { DemoCalloutComponent } from './components/demo-callout/demo-callout.component';
import { DemoNavComponent } from './components/demo-nav/demo-nav.component';

@NgModule({
  imports: [
    CommonModule,
    SxNgxFabricModule,
    PortalModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: DemoHomeComponent, children: [
        { path: 'checkbox', component: DemoCheckboxComponent },
        { path: 'button', component: DemoButtonComponent },
        { path: 'text-field', component: DemoTextFieldComponent },
        { path: 'dialog', component: DemoDialogComponent },
        { path: 'toggle', component: DemoToggleComponent },
        { path: 'breadcrumb', component: DemoBreadcrumbComponent },
        { path: 'callout', component: DemoCalloutComponent },
        { path: 'nav', component: DemoNavComponent },
      ] }
    ])
  ],
  declarations: [
    DemoCheckboxComponent,
    DemoNavigationComponent,
    DemoHomeComponent,
    DemoButtonComponent,
    DemoTextFieldComponent,
    DemoDialogComponent,
    ExampleDialogComponent,
    DemoToggleComponent,
    DemoBreadcrumbComponent,
    DemoCalloutComponent,
    DemoNavComponent,
  ],
  entryComponents: [
    ExampleDialogComponent
  ]
})
export class DemoModule { }
