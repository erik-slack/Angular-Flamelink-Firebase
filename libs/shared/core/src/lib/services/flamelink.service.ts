import { Injectable, Inject } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import { FirebaseApp } from '@angular/fire';
import flamelink from 'flamelink/app/dist';
// import * as flamelink from 'flamelink';
import 'flamelink/content';
import 'flamelink/navigation';
import 'flamelink/storage';

@Injectable({
  providedIn: 'root'
})
export class FlamelinkService {

  // GET|SET flApp
  private _flApp: flamelink.app.App;

  get flApp() {
    return this._flApp;
  }

  set flApp(value) {
    this._flApp = value;
  }

  constructor(@Inject(FirebaseApp) private _fb: firebase.app.App) {
    this.flApp = flamelink({
      firebaseApp: this._fb,
      env: 'production',
      locale: 'en-US',
      dbType: 'cf' // dbType should match the imports (rtdb or cf)
    });
  }

  getApp(): flamelink.app.App {
    return this.flApp;
  }

  getImageUrlPromise(fileId: number): Promise<string> {
    const promise: Promise<string> = this.getApp().storage.getURL({fileId});
    return promise;
  }
}
