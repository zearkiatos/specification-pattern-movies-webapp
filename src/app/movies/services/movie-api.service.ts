import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBase } from 'src/app/shared/api-base';
import { MovieResponse } from '../domain/movie-response';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export abstract class MovieApiService extends ApiBase {
  private url:string = '';
  constructor(private http: HttpClient) {
    super();
  }
  SearchAll(): Observable<MovieResponse> {
    this.url = `${environment.moviesApiBaseUrl}movie`;

    return this.http.get<MovieResponse>(this.url, { headers: this.head });
  }
}
