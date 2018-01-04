import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('f') registrationForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.registrationForm);
  }

}
