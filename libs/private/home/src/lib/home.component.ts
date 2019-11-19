import { Component, OnInit } from '@angular/core';

import { FirebaseService, FlamelinkService } from '@angular-flamelink/shared/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-flamelink-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedIn = false;
  shortStories: any[];
  shortStories$: Observable<any>;
  longStories: any[];
  longStories$: Observable<any>;
  activeStory: any;
  activeStoryType: string;

  private shortStoriesRef;
  private longStoriesRef;

  constructor(
    private firebaseService: FirebaseService,
    private flameLinkService: FlamelinkService
  ) {}


  ngOnInit(): void {
    // ANGULAR FIRE AUTH
    this.firebaseService.authState$.subscribe(this.firebaseAuthChangeListener.bind(this));
  }

  private firebaseAuthChangeListener(response): void {
    if (response) {
      this.loggedIn = true;
  
      this.shortStoriesRef = this.flameLinkService.getApp().content
        .subscribe({
          schemaKey: 'shortStory',
          fields: [
            'name',
            'author',
            'text'
          ],
          callback: (error, data) => {
            if (error) {
              return console.error(error);
            }

            console.log('data', data);
            this.shortStories = Object.values(data);

            // this.shortStoriesFacade.loadShortStories(data);
          }
        });
  
      this.longStoriesRef = this.flameLinkService.getApp().content
        .subscribe({
          schemaKey: 'longStory',
          fields: [
            'name',
            'author',
            'sections'
          ],
          callback: (error, data) => {
            if (error) {
              return console.error(error);
            }

            console.log('data', data);
            this.longStories = Object.values(data);

            // this.longStoriesFacade.loadLongStories(data);
          }
        });
    } else {
      this.loggedIn = false;
      if (this.shortStoriesRef) {
        this.shortStoriesRef();
      }
      if (this.longStoriesRef) {
        this.longStoriesRef();
      }
      // this.router.navigate(['/landing']);
    }
  }

  storyClicked(type: string, story: any): void {
    this.activeStory = story;
    this.activeStoryType = type;
  }

}
