import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';

import { SharedCoreModule } from '@angular-flamelink/shared/core';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    LoginRoutingModule,
    SharedCoreModule
  ],
  declarations: [LoginComponent]
})
export class PublicLoginModule {}
