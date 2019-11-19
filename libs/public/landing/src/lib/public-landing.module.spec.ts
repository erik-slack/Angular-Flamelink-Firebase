import { async, TestBed } from '@angular/core/testing';
import { PublicLandingModule } from './public-landing.module';

describe('PublicLandingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PublicLandingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PublicLandingModule).toBeDefined();
  });
});
