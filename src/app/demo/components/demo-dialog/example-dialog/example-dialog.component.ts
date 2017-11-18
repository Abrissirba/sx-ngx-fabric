import { Component, OnInit } from '@angular/core';
import { SxNgxFabricDialogService } from '../../../../sx-ngx-fabric/dialog/dialog.service';
import { SxNgxFabricDialogRef } from '../../../../sx-ngx-fabric/dialog/dialog-ref';

@Component({
  selector: 'sx-ngx-fabric-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss']
})
export class ExampleDialogComponent {

  constructor(
    private dialogService: SxNgxFabricDialogService,
    private dialogRef: SxNgxFabricDialogRef<ExampleDialogComponent>
  ) { }

  openDialog() {
    this.dialogService.open(ExampleDialogComponent).afterClosed().subscribe(res => {
      console.log(res)
    })
  }

  close() {
    this.dialogRef.close('test');
  }

}
