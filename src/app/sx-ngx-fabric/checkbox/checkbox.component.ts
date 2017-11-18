import { Component, OnInit, Input, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { Guid } from '../utils/guid';
import { ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sx-ngx-fabric-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {

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
