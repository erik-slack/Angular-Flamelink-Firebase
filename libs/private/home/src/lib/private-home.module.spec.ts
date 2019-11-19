import { async, TestBed } from '@angular/core/testing';
import { PrivateHomeModule } from './private-home.module';

describe('PrivateHomeHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PrivateHomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PrivateHomeModule).toBeDefined();
  });
});
