import { Component, OnInit, Input, ChangeDetectorRef, forwardRef, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Guid } from '../utils/guid';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sx-ngx-fabric-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToggleComponent),
    multi: true
  }],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'ms-Toggle'
  }
})
export class ToggleComponent {

  private _checked = false;
  @Input() get checked() {
    return this._checked;
  }

  set checked(checked: boolean) {
    if (checked !== this.checked) {
      this._checked = checked;
      this.changeDetectorRef.markForCheck();
    }
  }

  @Input() disabled = false;

  @Input() offText = 'Off';

  @Input() onText = 'On';

  @Input() textLeft = false;

  @HostBinding('class.is-disabled') get classIsDisabled() { return this.disabled; }

  @HostBinding('class.ms-Toggle--textLeft') get classTextLeft() { return this.textLeft; }

  inputId = Guid.uniqueid();

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  onInputClick(evt: MouseEvent) {
    evt.stopPropagation();
    this.toggle();
  }

  toggle() {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }

  // ControlValueAccessor implementation
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.changeDetectorRef.markForCheck();
  }

  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  public writeValue(val: any) {
    this.checked = val;
  }

  public registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  public registerOnTouched(fn: () => void): void { this._onTouched = fn; }

}
