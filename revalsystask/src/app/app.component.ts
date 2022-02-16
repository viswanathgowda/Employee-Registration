import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revalsystask';
  buttonName = 'Save'; 
  employeeDetails: any[];
  registration!: FormGroup;
  constructor(private _myfb: FormBuilder) {
    this.employeeDetails = [];

  }
  ngOnInit() {
    this.registration = this._myfb.group({
      employeeid: [{value: 0, disabled: false}],
      employeename: [''],
      designation: [''],
      salary: [''],
      email: ['', [Validators.email, Validators.required]],
      mobile: ['', [Validators.pattern('[6-9]\\d{9}'), Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      gender: ['male'],
      Languagesknown: this._myfb.group({
        telugu: [''],
        english: [''],
        hindi: ['']
      }),
      qualification: ['']
    });
  }
  
  save() {
    this.registration.get('employeeid')?.enable();
    this.employeeDetails =   this.employeeDetails.filter(i => i.employeeid != this.registration.value.employeeid);
    this.employeeDetails.push(this.registration.value);
    localStorage.setItem('employeeDetails', JSON.stringify(this.employeeDetails));
    this.registration.reset();
    //console.log(localStorage.getItem('employeeDetails'), "EmpDetails")
  }
  reset() {
    this.registration.reset();
  }
  empid= 0;
  edit(e: any) {
    this.buttonName = 'Update';
    this.registration.get('employeeid')?.disable();
    this.registration.setValue(e);
    console.log(e);
  }
  delete(e: any) {
    this.employeeDetails = this.employeeDetails.filter(i => i.employeeid !== e.employeeid);
    localStorage.removeItem('employeeDetails');
    localStorage.setItem('employeeDetails', JSON.stringify(this.employeeDetails));
  }
  designationdata = [
    { name: "select" }, { name: "Manager" }, { name: "Software Developer" }, { name: "Software Testers" }, { name: "Admin" }
  ];
}
