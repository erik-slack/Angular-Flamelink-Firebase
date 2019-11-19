import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortStoryComponent } from './short-story.component';

describe('ShortStoryComponent', () => {
  let component: ShortStoryComponent;
  let fixture: ComponentFixture<ShortStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
