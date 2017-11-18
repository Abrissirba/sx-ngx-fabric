import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sx-ngx-fabric-demo-text-field',
  templateUrl: './demo-text-field.component.html',
  styleUrls: ['./demo-text-field.component.scss']
})
export class DemoTextFieldComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      standard: ['Standard'],
      disabled: [{ value: null, disabled: true }],
      required: [null, Validators.required],
      placeholder: [null],
      multiline: []
    });
  }

}
