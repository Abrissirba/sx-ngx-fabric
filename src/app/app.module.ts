import { PortalModule } from '@angular/cdk/portal';
import { DemoHomeComponent } from './demo/components/demo-home/demo-home.component';
import { DemoCheckboxComponent } from './demo/components/demo-checkbox/demo-checkbox.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DemoModule,
    PortalModule,
    RouterModule.forRoot([
      { path: '', loadChildren: './demo/demo.module#DemoModule' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
