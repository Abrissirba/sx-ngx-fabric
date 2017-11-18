import { Component, OnInit, HostBinding, Input, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'sx-ngx-fabric-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextFieldComponent),
    multi: true
  }],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFieldComponent {

  @Input() label;

  @Input() multiline = false;

  @Input() rows = 3;

  @Input() type = 'text';

  @Input() placeholder;

  @Input() disabled = false;

  @Input() required = false;

  value = null;

  @HostBinding('class') classes = 'ms-TextField';

  @HostBinding('class.ms-TextField--multiline') get classMultiline() { return this.multiline; }

  @HostBinding('class.is-disabled') get classIsDisabled() { return this.disabled; }

  

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  onChange(evt) {
    evt.stopPropagation();
    this.value = evt.target.value;
    this._onChange(this.value);
  }

  onTouched(evt) {
    this._onTouched();
  }

  // ControlValueAccessor implementation
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.changeDetectorRef.markForCheck();
  }

  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  public writeValue(val: any) {
    this.value = val;
  }

  public registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  public registerOnTouched(fn: () => void): void { this._onTouched = fn; }

}
