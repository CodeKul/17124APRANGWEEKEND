import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      userName : formBuilder.control(''),
      password : formBuilder.control(''),
      email : formBuilder.control('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);
  }
}
