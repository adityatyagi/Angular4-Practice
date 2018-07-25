import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  // explicitly creating FormGroup and FormControl objects
  form = new FormGroup({

    // sub-groups in a form
    account: new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
    ],UsernameValidators.shouldBeUnique),
      password: new FormControl('',Validators.required)
    })
   
  });

  
  // calling the server to validate the username and password
   login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }

  // creating validators
  get username(){
    return this.form.get('account.username');
  }

 

}


