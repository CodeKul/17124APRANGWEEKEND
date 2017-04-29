import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      userName: formBuilder.control('', [Validators.required, this.custValidator]),
      password: formBuilder.control('', [Validators.required]),
      email: formBuilder.control('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);
  }

  custValidator(fc: FormControl): { [key: string]: string } {
    if (fc.value === 'an') return { isValid: 'failed' };
    return null;
  }
}
