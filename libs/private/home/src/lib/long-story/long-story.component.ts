import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'long-story',
  templateUrl: './long-story.component.html',
  styleUrls: ['./long-story.component.scss']
})
export class LongStoryComponent implements OnInit {
  @Input() longStory: any;

  constructor() { }

  ngOnInit() {
  }

}
