import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'short-story',
  templateUrl: './short-story.component.html',
  styleUrls: ['./short-story.component.scss']
})
export class ShortStoryComponent implements OnInit {
  @Input() shortStory: any;

  constructor() { }

  ngOnInit() {
  }

}
