import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'sx-ngx-fabric-demo-toggle',
  templateUrl: './demo-toggle.component.html',
  styleUrls: ['./demo-toggle.component.scss']
})
export class DemoToggleComponent {

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
