import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRepository } from 'src/app/shared/api-repository';
import { MovieRepository } from '../domain/movie-repository';
import { MovieResponse } from '../domain/movie-response';
import { environment } from '../../../environments/environment';

@Injectable()
export class MovieApiRepositoryService extends ApiRepository implements MovieRepository {
  private url:string;
  constructor() {
    super(private http: HttpClient);
  }
  SearchAll(): MovieResponse {
    this.url = `${environment.moviesApiBaseUrl}movie`

    return this.http;
  }
}
