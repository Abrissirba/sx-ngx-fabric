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

  private _selected = false;
  @Input() get selected() {
    return this._selected;
  }

  set selected(selected: boolean) {
    if (selected !== this.selected) {
      this._selected = selected;
      this.changeDetectorRef.markForCheck();
    }
  }

  @Input() disabled = false;

  @HostBinding('class.is-disabled') get classIsDisabled() { return this.disabled; } 

  inputId = Guid.uniqueid();

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  onInputClick(evt: MouseEvent) {
    evt.stopPropagation();
    this.toggle();
  }

  toggle() {
    this.selected = !this.selected;
    this._onChange(this.selected);
  }

  // ControlValueAccessor implementation
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.changeDetectorRef.markForCheck();
  }

  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  public writeValue(val: any) {
    this.selected = val;
  }

  public registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  public registerOnTouched(fn: () => void): void { this._onTouched = fn; }

}
