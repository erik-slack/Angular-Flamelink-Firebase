import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '@angular-flamelink/shared/core';

@Component({
  selector: 'angular-flamelink-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loggedIn = false;

  constructor(
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    // ANGULAR FIRE AUTH
    this.firebaseService.authState$.subscribe(this.firebaseAuthChangeListener.bind(this));
  }

  private firebaseAuthChangeListener(response): void {
    if (response) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
      // this.router.navigate(['/landing']);
    }
  }

}




  