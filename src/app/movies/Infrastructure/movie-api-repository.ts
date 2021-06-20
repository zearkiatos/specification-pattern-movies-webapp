import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MovieRepository } from "../domain/movie-repository";
import { MovieResponse } from "../domain/movie-response";
import { MovieApiService } from "../services/movie-api.service";
@Injectable()
export class MovieApiRepository implements MovieRepository {
    constructor(private movieApiService: MovieApiService) {

    }
    SearchByCriterial(body: any): Observable<MovieResponse> {
        return this.movieApiService.SearchByCriterial(body);
    }
    SearchAll(): Observable<MovieResponse> {
        return this.movieApiService.SearchAll();
    }
}
