import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBreadcrumbItem } from './i-breadcrumb-item';

@Component({
  selector: 'sx-ngx-fabric-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  @Input() items: Array<IBreadcrumbItem>;

  @Output() itemClick = new EventEmitter<IBreadcrumbItem>();

  constructor() { }

  onClick(item: IBreadcrumbItem) {
    this.itemClick.next(item);
  }

}
