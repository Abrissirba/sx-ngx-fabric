import { Injectable, Injector, ComponentRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Component } from '@angular/compiler/src/core';
import { SxNgxFabricDialogRef } from './dialog-ref';
import { OverlayConfig } from '@angular/cdk/overlay';
import { PortalInjector, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { SX_NGX_FABRIC_DIALOG_DATA } from './dialog-tokens';
import { ComponentType } from '@angular/cdk/portal';
import { SxNgxDialogContainerComponent } from './dialog-container.component';
import { SxNgxFabricDialogConfig } from './dialog-config';



const DEFAULT_CONFIG: SxNgxFabricDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'ms-Overlay--dark',
  panelClass: 'tm-file-preview-dialog-panel',
  minWidth: '250px',
  maxWidth: '80vw',
  minHeight: '100px',
  maxHeight: '80vh'
}


@Injectable()
export class SxNgxFabricDialogService {

  constructor(
    private injector: Injector,
    private overlay: Overlay) { }

  open<T>(component: ComponentType<T>, config: SxNgxFabricDialogConfig = {}): SxNgxFabricDialogRef<T> {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(dialogConfig);

    const dialogContainer = this._attachDialogContainer(overlayRef, config);

    // Instantiate remote control
    const dialogRef = this._attachDialogContent(component, dialogContainer, overlayRef, config);

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }

  private createOverlay(config: SxNgxFabricDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: SxNgxFabricDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: positionStrategy,
      minWidth: config.minWidth,
      maxWidth: config.maxWidth,
      minHeight: config.minHeight,
      maxHeight: config.maxHeight
    });

    return overlayConfig;
  }

  private attachDialogContainer<T>(component: ComponentType<T>, overlayRef: OverlayRef, config: SxNgxFabricDialogConfig, dialogRef: SxNgxFabricDialogRef<T>) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(component, null, injector);
    const containerRef: ComponentRef<T> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private _attachDialogContainer(overlay: OverlayRef, config: SxNgxFabricDialogConfig): SxNgxDialogContainerComponent {
    const containerPortal = new ComponentPortal(SxNgxDialogContainerComponent, null);
    const containerRef: ComponentRef<SxNgxDialogContainerComponent> = overlay.attach(containerPortal);
    containerRef.instance._config = config;

    return containerRef.instance;
  }

  private _attachDialogContent<T>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    dialogContainer: SxNgxDialogContainerComponent,
    overlayRef: OverlayRef,
    config: SxNgxFabricDialogConfig): SxNgxFabricDialogRef<T> {

  // Create a reference to the dialog we're creating in order to give the user a handle
  // to modify and close it.
  const dialogRef = new SxNgxFabricDialogRef<T>(overlayRef);

  // When the dialog backdrop is clicked, we want to close it.
  if (config.hasBackdrop) {
    overlayRef.backdropClick().subscribe(() => {
      // if (!dialogRef.disableClose) {
        dialogRef.close();
      // }
    });
  }

  // Close when escape keydown event occurs
  // overlayRef.keydownEvents().pipe(
  //   filter(event => event.keyCode === ESCAPE && !dialogRef.disableClose)
  // ).subscribe(() => dialogRef.close());

  if (componentOrTemplateRef instanceof TemplateRef) {
    dialogContainer.attachTemplatePortal(
      new TemplatePortal<T>(componentOrTemplateRef, null,
        <any>{ $implicit: config.data, dialogRef }));
  } else {
    const injector = this.createInjector<T>(config, dialogRef);
    const contentRef = dialogContainer.attachComponentPortal<T>(
        new ComponentPortal(<any>componentOrTemplateRef, undefined, injector));
    dialogRef.componentInstance = contentRef.instance;
  }

  // dialogRef
  //   .updateSize(config.width, config.height)
  //   .updatePosition(config.position);

  return dialogRef;
}


  private createInjector<T>(config: SxNgxFabricDialogConfig, dialogRef: SxNgxFabricDialogRef<T>): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(SxNgxFabricDialogRef, dialogRef);
    injectionTokens.set(SX_NGX_FABRIC_DIALOG_DATA, config.data);

    return new PortalInjector(this.injector, injectionTokens);
  }

}
