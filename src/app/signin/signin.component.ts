import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  loginForm: FormGroup;
  constructor(private router: Router){
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
  });
  }
  onLogin(){
    //Call Login API and validate user.
    let isValid = true;
    //If user checks out, then go to the next page.
    if(isValid){
      this.router.navigateByUrl('/dashboard');
    }
  }
}

