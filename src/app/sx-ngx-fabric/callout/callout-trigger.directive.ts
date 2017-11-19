import { OverlayRef, Overlay, OverlayConfig, ConnectedPositionStrategy, HorizontalConnectionPos, VerticalConnectionPos } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, Input, ElementRef, ViewContainerRef, Optional } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CalloutComponent } from './callout.component';
import { distinctUntilChanged } from 'rxjs/operators';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[sxNgxFabricCalloutTrigger]',
  host: {
    'aria-haspopup': 'true',
    '(click)': '_handleClick($event)',
  },
  exportAs: 'sxNgxFabricCalloutTrigger'
})
export class CalloutTriggerDirective implements OnDestroy {

  @Input()
  get sxNgxFabricCalloutTrigger(): CalloutComponent {
    return this.callout;
  }

  set sxNgxFabricCalloutTrigger(val: CalloutComponent) {
    this.callout = val;
  }

  private _portal: TemplatePortal<any>;
  private _overlayRef: OverlayRef | null = null;
  private _calloutOpen = false;
  private _closeSubscription = Subscription.EMPTY;
  private _positionSubscription = Subscription.EMPTY;

  callout: CalloutComponent;

  constructor(
    private _overlay: Overlay,
    private _element: ElementRef,
    private _viewContainerRef: ViewContainerRef
  ) { }

  ngOnDestroy() {
    this._closeSubscription.unsubscribe();
    this._positionSubscription.unsubscribe();
  }

  openCallout(): void {
    if (!this._calloutOpen) {
      this._createOverlay().attach(this._portal);
      setTimeout(() => {
        this.callout.updateBeakPosition();
      })
    }
  }

  closeMenu(): void {
    this.callout.closed.emit();
  }

  _handleClick() {
    this.openCallout();
  }

  private _createOverlay(): OverlayRef {
    if (!this._overlayRef) {
      this._portal = new TemplatePortal(this.callout.templateRef, this._viewContainerRef);
      const config = this._getOverlayConfig();
      this._overlayRef = this._overlay.create(config);
      this._closeSubscription = this._overlayRef.backdropClick().subscribe(_ => {
        this._overlayRef.detach()
      });
    }

    return this._overlayRef;
  }

  private _getOverlayConfig(): OverlayConfig {
    const position = this._getPosition();
    this._subscribeToPositions(position);
    return new OverlayConfig({
      hasBackdrop: true,
      positionStrategy: position,
      scrollStrategy: this._overlay.scrollStrategies.reposition()
    });
  }

  private _getPosition(): ConnectedPositionStrategy {
    const [originX, originFallbackX]: HorizontalConnectionPos[] =
        this.callout.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];

    const [overlayY, overlayFallbackY]: VerticalConnectionPos[] =
        this.callout.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];

    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    const [overlayX, overlayFallbackX] = [originX, originFallbackX];
    const offsetY = 0;

    originY = overlayY === 'top' ? 'bottom' : 'top';
    originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';

    return this._overlay.position()
        .connectedTo(this._element, {originX, originY}, {overlayX, overlayY})
        .withOffsetY(offsetY)
        .withFallbackPosition(
            {originX: originFallbackX, originY},
            {overlayX: overlayFallbackX, overlayY})
        .withFallbackPosition(
            {originX, originY: originFallbackY},
            {overlayX, overlayY: overlayFallbackY},
            undefined, -offsetY)
        .withFallbackPosition(
            {originX: originFallbackX, originY: originFallbackY},
            {overlayX: overlayFallbackX, overlayY: overlayFallbackY},
            undefined, -offsetY)
  }

  private _subscribeToPositions(position: ConnectedPositionStrategy) {
    this._positionSubscription = position.onPositionChange
    .pipe(
      distinctUntilChanged(null, x => x.connectionPair)
    )
    .subscribe(pos => {
      const isCalloutUnderTrigger = pos.connectionPair.overlayY === 'top';
      const isCalloutLeftAlignedToTrigger = pos.connectionPair.overlayX === 'start';
      const triggerMiddle = this._portal.viewContainerRef.element.nativeElement.offsetWidth / 2 - 14;

      this.callout.beakPosition = {
        top: isCalloutUnderTrigger ? '-6px' : null,
        bottom: !isCalloutUnderTrigger ? '-6px' : null,
        left: isCalloutLeftAlignedToTrigger ? triggerMiddle + 'px' : null,
        right: !isCalloutLeftAlignedToTrigger ? triggerMiddle + 'px' : null
      }
    })
  }

}
