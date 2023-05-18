import { TestBed } from '@angular/core/testing';

import { BookingGuard } from './booking.guard';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('BookingGuard', () => {
  let guard: BookingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatSnackBar]
    });
    guard = TestBed.inject(BookingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
