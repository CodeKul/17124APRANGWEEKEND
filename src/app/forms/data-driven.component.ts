import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  cities = [
    'Pune', 'Mumbai', 'Nagpur', 'Kolhapur'
  ];
  myForm: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      user: formBuilder.group({
        userName: formBuilder.control('', [Validators.required, this.custValidator]),
        email: formBuilder.control('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
      }),
      password: formBuilder.control('', [Validators.required]),
      city: formBuilder.control(''),
      names : formBuilder.array([
        'Sachin',
        'Sehvag'
      ])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);
  }

  onAdd() {
    (<FormArray>this.myForm['controls']['names']).push(new FormControl(''));
  }
  custValidator(fc: FormControl): { [key: string]: string } {
    if (fc.value === 'an') return { isValid: 'need full user name' };
    return null;
  }
}
