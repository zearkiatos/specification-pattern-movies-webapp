import { TestBed } from '@angular/core/testing';

import { MovieApiRepositoryService } from './movie-api-repository.service';

describe('MovieApiRepositoryService', () => {
  let service: MovieApiRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieApiRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
