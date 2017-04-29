import { Component, OnInit } from '@angular/core';
import { ValidationErrors, AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

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
      password: formBuilder.control('', [Validators.required], this.simpleAsync),
      city: formBuilder.control(''),
      names: formBuilder.array([
        'Sachin',
        'Sehvag'
      ])
    });
  }

  ngOnInit() {
    this.myForm.valueChanges.subscribe(val => console.log(val));
    this.myForm.statusChanges.subscribe(sts => console.log(`Status - ${sts}`));
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
  simpleAsync: AsyncValidatorFn = (c: AbstractControl) => new Promise<ValidationErrors>((res, rej) => {
    setTimeout(() => {
      if (c.value === 'a') res({ isValid: 'Its not' });
      else res(null);
    }, 1000);
  });
}
