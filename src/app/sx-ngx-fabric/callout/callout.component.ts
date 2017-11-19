import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
import { VerticalConnectionPos, HorizontalConnectionPos } from '@angular/cdk/overlay';

@Component({
  selector: 'sx-ngx-fabric-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss']
})
export class CalloutComponent {

  @Input() xPosition: string;

  @Input() yPosition: string;

  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;

  @ViewChild('beak') beak: ElementRef;

  @Output() closed = new EventEmitter<void | 'click' | 'keydown'>();

  private _beakPosition;
  get beakPosition() { return this._beakPosition; }
  set beakPosition(val) {
    this._beakPosition = val;
    this.updateBeakPosition();
  }

  constructor(
    private elementRef: ElementRef,
  ) { }

  updateBeakPosition() {
    if (this.beakPosition) {
      this.beak.nativeElement.style.top = this.beakPosition.top;
      this.beak.nativeElement.style.left = this.beakPosition.left;
      this.beak.nativeElement.style.right = this.beakPosition.right;
      this.beak.nativeElement.style.bottom = this.beakPosition.bottom;
    }
  }

}
