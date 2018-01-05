import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('f') registrationForm: NgForm;
  defaultEquipment = 'none';

  student = {
    firstName: '',
    lastName: '',
    streetAddress: '',
    cityZip: '',
    mobilePhone: '',
    email:'',
    dob: new Date(),
    bodyWeight: 65,
    priorExperience: 0,
    priorThangkaTraining: 0,
    equipment: '',
    voucher: ''
  };
  submitted = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.student.firstName = this.registrationForm.value.studentContact.firstName;
    this.student.lastName = this.registrationForm.value.studentContact.lastName;
    this.student.streetAddress = this.registrationForm.value.studentContact.streetAddress;
    this.student.cityZip = this.registrationForm.value.studentContact.cityZip;
    this.student.mobilePhone = this.registrationForm.value.studentContact.mobilePhone;
    this.student.email = this.registrationForm.value.studentContact.email;
    this.student.dob = this.registrationForm.value.studentSpecificities.dob;
    this.student.bodyWeight = this.registrationForm.value.studentSpecificities.bodyWeight;
    this.student.priorExperience = this.registrationForm.value.studentSpecificities.priorExperience;
    this.student.priorThangkaTraining = this.registrationForm.value.studentSpecificities.priorThangkaTraining;
    this.student.equipment = this.registrationForm.value.studentSpecificities.equipment;
    this.student.voucher = this.registrationForm.value.voucher;

    this.registrationForm.reset();
    this.router.navigate(['/']);
  }
}
