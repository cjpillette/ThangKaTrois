// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormGroup, FormControl, Validators } from "@angular/forms";

// import { Student } from './student.model';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent implements OnInit {
//   submitted = false;
//   studentRego: FormGroup;

//   constructor(private router: Router) { }

//   ngOnInit() {
//     this.studentRego = new FormGroup({
//         mobileNumber: new FormControl(null, Validators.required),
//         streetAddress: new FormControl(null, Validators.required),
//         cityZip: new FormControl(null, Validators.required),
//         dob: new FormControl(null, Validators.required),
//         bodyWeight: new FormControl(null, Validators.required),
//         priorExperience: new FormControl(null, Validators.required),
//         priorThangkaTraining: new FormControl(null, Validators.required),
//         equipment: new FormControl('none', Validators.required),
//         voucher: new FormControl(null)
//     });
//   }

//   onSubmit() {
//     this.submitted = true;
//     this.studentRego.reset();
//     this.router.navigate(['/']);
//   }
// }
