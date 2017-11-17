import { TestBed, async, inject } from '@angular/core/testing';

import { FilledCartGuard } from './filled-cart.guard';

describe('FilledCartGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilledCartGuard]
    });
  });

  it('should ...', inject([FilledCartGuard], (guard: FilledCartGuard) => {
    expect(guard).toBeTruthy();
  }));
});
