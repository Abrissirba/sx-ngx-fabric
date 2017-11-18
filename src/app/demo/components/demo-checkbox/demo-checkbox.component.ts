import { Guid } from './../../../sx-ngx-fabric/utils/guid';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'sx-ngx-fabric-demo-checkbox',
  templateUrl: './demo-checkbox.component.html',
  styleUrls: ['./demo-checkbox.component.scss']
})
export class DemoCheckboxComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      defaultTrue: [true],
      defaultFalse: [false],
      disabled: [{ value: true, disabled: true }]
    });
  }
}
