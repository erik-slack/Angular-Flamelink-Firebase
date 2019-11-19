import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongStoryComponent } from './long-story.component';

describe('LongStoryComponent', () => {
  let component: LongStoryComponent;
  let fixture: ComponentFixture<LongStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
