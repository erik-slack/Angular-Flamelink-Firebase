import { async, TestBed } from '@angular/core/testing';
import { PublicLoginModule } from './public-login.module';

describe('PublicLoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PublicLoginModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PublicLoginModule).toBeDefined();
  });
});
