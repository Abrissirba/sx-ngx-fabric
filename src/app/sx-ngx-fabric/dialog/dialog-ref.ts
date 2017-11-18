import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

export class SxNgxFabricDialogRef<T> {

    private _beforeClose = new Subject<void>();
    private _afterClosed = new Subject<void>();

    componentInstance: T;

    constructor(private overlayRef: OverlayRef) { }

    close(value?: any): void {
        this.overlayRef.dispose();
        this._afterClosed.next(value);
        this._afterClosed.complete();
        this.componentInstance = null;

        // this.componentInstance.animationStateChanged
        //   .filter(event => event.phaseName === 'start')
        //   .take(1)
        //   .subscribe(() => {
        //     this._beforeClose.next();
        //     this._beforeClose.complete();
        //     this.overlayRef.detachBackdrop();
        //   });

        // this.componentInstance.animationStateChanged
        //   .filter(event => event.phaseName === 'done' && event.toState === 'leave')
        //   .take(1)
        //   .subscribe(() => {
        //     this.overlayRef.dispose();
        //     this._afterClosed.next();
        //     this._afterClosed.complete();
        //     this.componentInstance = null;
        //   });

        // this.componentInstance.startExitAnimation();
    }

    afterClosed(): Observable<void> {
        return this._afterClosed.asObservable();
    }

    beforeClose(): Observable<void> {
        return this._beforeClose.asObservable();
    }
}
