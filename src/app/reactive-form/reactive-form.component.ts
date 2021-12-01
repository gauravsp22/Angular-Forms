import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: []
})
export class ReactiveFormComponent implements OnInit {

  constructor(public fb: FormBuilder) { }
  //using formcontrol instance
  /*employeeForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl()
    })
  });*/


  employeeForm = this.fb.group({
    Name: [],
    
    address1: this.fb.group({
    // address2: this.fb.group
      
      city: [],
      state: []
    })
  });


  ngOnInit() {
  }

  onSubmit() {
    //required submit operation
    console.log(this.employeeForm.value);
  }

}
