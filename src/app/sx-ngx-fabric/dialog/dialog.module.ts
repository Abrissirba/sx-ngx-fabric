import { PortalModule } from '@angular/cdk/portal';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SxNgxDialogContainerComponent } from './dialog-container.component';
import { SxNgxFabricDialogService } from './dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { SxNgxFabricDialogActions, SxNgxFabricDialogClose, SxNgxFabricDialogTitle, SxNgxFabricDialogContent } from './dialog-content.directive';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ],
  declarations: [
    SxNgxDialogContainerComponent,
    SxNgxFabricDialogClose,
    SxNgxFabricDialogTitle,
    SxNgxFabricDialogContent,
    SxNgxFabricDialogActions
  ],
  entryComponents: [
    SxNgxDialogContainerComponent
  ],
  exports: [
    SxNgxFabricDialogClose,
    SxNgxFabricDialogTitle,
    SxNgxFabricDialogContent,
    SxNgxFabricDialogActions
  ],
  providers: [
    SxNgxFabricDialogService
  ]
})
export class DialogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DialogModule,
      providers: [SxNgxFabricDialogService]
    };
  }
}
