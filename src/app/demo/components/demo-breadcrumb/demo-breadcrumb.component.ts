import { IBreadcrumbItem } from './../../../sx-ngx-fabric/breadcrumb/i-breadcrumb-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sx-ngx-fabric-demo-breadcrumb',
  templateUrl: './demo-breadcrumb.component.html',
  styleUrls: ['./demo-breadcrumb.component.scss']
})
export class DemoBreadcrumbComponent {

  items: Array<IBreadcrumbItem> = [
    { text: 'First'},
    { text: 'Second Item'},
    { text: 'Third and last item'},
  ]

  constructor() { }

  onItemClick(item: IBreadcrumbItem) {
    console.log(item)
  }
}
