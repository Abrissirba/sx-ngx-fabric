import { SxNgxFabricDialogService } from './../../../sx-ngx-fabric/dialog/dialog.service';
import { Component, OnInit } from '@angular/core';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

@Component({
  selector: 'sx-ngx-fabric-demo-dialog',
  templateUrl: './demo-dialog.component.html',
  styleUrls: ['./demo-dialog.component.scss']
})
export class DemoDialogComponent implements OnInit {

  constructor(
    private dialogService: SxNgxFabricDialogService
  ) { }

  ngOnInit() {

  }

  openDialog() {
    this.dialogService.open(ExampleDialogComponent).afterClosed().subscribe(res => {
      console.log(res)
    })
  }
}
