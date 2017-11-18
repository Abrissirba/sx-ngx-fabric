import { Component, OnInit, Input } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'button[sx-ngx-fabric-button], a[sx-ngx-fabric-button]',
  styleUrls: ['./button.component.scss'],
  templateUrl: './button.component.html',
  // host: {'class': 'mat-button'}
})
export class ButtonComponent implements OnInit {

  @Input() primary = false;

  @HostBinding('class') classes = 'ms-Button';

  @HostBinding('class.ms-Button--primary') get classPrimary() { return this.primary; }

  constructor() { }

  ngOnInit() {
  }

}
