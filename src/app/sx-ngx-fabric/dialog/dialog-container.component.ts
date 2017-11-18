import { Component, OnInit, ViewEncapsulation, ViewChild, ComponentRef, EmbeddedViewRef, Optional, Inject, ChangeDetectorRef, ElementRef } from '@angular/core';
import { CdkPortalOutlet, BasePortalOutlet, TemplatePortal, CdkPortal } from '@angular/cdk/portal';
import { ComponentPortal } from '@angular/cdk/portal';
import { SxNgxFabricDialogConfig } from './dialog-config';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'sx-ngx-fabric-dialog-container',
  templateUrl: './dialog-container.component.html'
})
export class SxNgxDialogContainerComponent extends BasePortalOutlet {

  /** The portal outlet inside of this container into which the dialog content will be loaded. */
  @ViewChild('portalOutlet') _portalOutlet: CdkPortalOutlet;

  _config: SxNgxFabricDialogConfig;

  constructor(
    private _elementRef: ElementRef,
    // private _focusTrapFactory: FocusTrapFactory,
    private _changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(DOCUMENT) private _document: any
  ) {
    super();
  }

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    // if (this._portalOutlet.hasAttached()) {
    //   throw new Error('Has already attached')
    // }

    return this._portalOutlet.attachComponentPortal(portal);
  }
  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    throw new Error('Method not implemented.');
  }

}
