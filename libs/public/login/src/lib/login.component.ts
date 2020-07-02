import { Component, OnInit } from '@angular/core';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';

import { FirebaseService } from '@angular-flamelink/shared/core';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-flamelink-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loggedIn = false;

  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }

  // ANGULAR FIRE AUTH
  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult): void {
    console.log('logging in success', signInSuccessData);
    this.loggedIn = true;
    this.router.navigate(['/home']);
  }

  errorCallback(errorData: FirebaseUISignInFailure): void {
    console.log('logging in error', errorData);
  }

  signOutBtnClicked(): void {
    this.firebaseService.signOut();
    this.loggedIn = false;
    this.router.navigate(['login']);
  }

}
