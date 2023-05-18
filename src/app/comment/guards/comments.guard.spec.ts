import { TestBed } from '@angular/core/testing';

import { CommentsGuard } from './comments.guard';
import { HttpClientModule } from '@angular/common/http';

describe('CommentsGuard', () => {
  let guard: CommentsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    guard = TestBed.inject(CommentsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
