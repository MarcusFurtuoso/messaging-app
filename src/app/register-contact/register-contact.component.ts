import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-contact',
  templateUrl: './register-contact.component.html',
  styleUrls: ['./register-contact.component.css'],
})
export class RegisterContactComponent implements OnInit {
  registerForm!: FormGroup;

  errorMessages = {
    firstName: {
      required: 'First name is required',
      minlength: 'First name should be min 2 chars long',
    },
    lastName: {
      required: 'Last name is required',
      minlength: 'Last name should be min 2 chars long',
    },
    company: {
      required: 'Company is required',
    },
    mobile: {
      required: 'Mobile is required',
    },
    email: {
      required: 'Email is required',
      email: 'Email is invalid',
    },
  };

  constructor(private router: Router, public formBuilder: FormBuilder) {}

  openPage(page: string) {
    switch (page) {
      case 'Done':
        this.router.navigate(['/home']);
        break;
      default:
    }
  }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      company: ['', [Validators.required, Validators.minLength(2)]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
    });
  }

  get errorControl() {
    return this.registerForm.controls;
  }

  submitForm = () => {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };
}
