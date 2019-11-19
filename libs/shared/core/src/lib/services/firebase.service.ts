import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

// import firebase = require('firebase');

@Injectable()
export class FirebaseService {
  authState$: Observable<firebase.User> = this.angularFireAuth.authState;

  constructor(
    private angularFireAuth: AngularFireAuth,
  ) {}

  signOut(): void {
    this.angularFireAuth.auth.signOut();
  }

  useRefreshToken(): void {
    // this.angularFireAuth.auth
  }
}
