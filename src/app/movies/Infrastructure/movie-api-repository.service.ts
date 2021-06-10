import { Injectable } from '@angular/core';
import { MovieRepository } from '../domain/movie-repository';
import { MovieResponse } from '../domain/movie-response';

@Injectable({
  providedIn: 'root'
})
export class MovieApiRepositoryService implements MovieRepository {

  constructor() { }
  SearchAll(): MovieResponse {
    throw new Error('Method not implemented.');
  }
}
