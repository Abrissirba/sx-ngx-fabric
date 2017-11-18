import { SxNgxDialogContainerComponent } from './dialog-container.component';

import {Directive, Input, OnChanges, OnInit, Optional, SimpleChanges} from '@angular/core';
import { SxNgxFabricDialogRef } from './dialog-ref';

/** Counter used to generate unique IDs for dialog elements. */
let dialogElementUid = 0;

/**
 * Button that will close the current dialog.
 */
@Directive({
  selector: `button[sx-ngx-fabric-dialog-close], button[sxNgxFabricDialogClose]`,
  exportAs: 'sxNgxFabricDialogClose',
  host: {
    '(click)': 'dialogRef.close(dialogResult)',
    '[attr.aria-label]': 'ariaLabel',
    'type': 'button', // Prevents accidental form submits.
  }
})
export class SxNgxFabricDialogClose implements OnChanges {
  /** Screenreader label for the button. */
  @Input('aria-label') ariaLabel: string = 'Close dialog';

  /** Dialog close input. */
  @Input('sx-ngx-fabric-dialog-close') dialogResult: any;

  @Input('sxNgxFabricDialogClose') dialogClose: any;

  constructor(public dialogRef: SxNgxFabricDialogRef<any>) { }

  ngOnChanges(changes: SimpleChanges) {
    const proxiedChange = changes._sxNgxFabricDialogClose || changes._sxNgxFabricDialogCloseResult;

    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
}

/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
@Directive({
  selector: '[sx-ngx-fabric-dialog-title], [sxNgxFabricDialogTitle]',
  exportAs: 'sxNgxFabricDialogTitle',
  host: {
    'class': 'ms-Dialog-title',
    '[id]': 'id',
  },
})
export class SxNgxFabricDialogTitle {
  @Input() id = `sx-ngx-fabric-dialog-title-${dialogElementUid++}`;

  constructor(@Optional() private _container: SxNgxDialogContainerComponent) { }

}


/**
 * Scrollable content container of a dialog.
 */
@Directive({
  selector: `[sx-ngx-fabric-dialog-content], sx-ngx-fabric-dialog-content, [sxNgxFabricDialogContent]`,
  host: {'class': 'ms-Dialog-content'}
})
export class SxNgxFabricDialogContent { }


/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
@Directive({
  selector: `[sx-ngx-fabric-dialog-actions], sx-ngx-fabric-dialog-actions, [sxNgxFabricDialogActions]`,
  host: {'class': 'ms-Dialog-actions'}
})
export class SxNgxFabricDialogActions { }
