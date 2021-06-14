import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MovieRepository } from "../domain/movie-repository";
import { MovieResponse } from "../domain/movie-response";
import { MovieApiService } from "../services/movie-api.service";
@Injectable()
export class MovieApiRepository implements MovieRepository {
    constructor(private movieApiService: MovieApiService) {

    }
    SearchAll(): Observable<MovieResponse> {
        return this.movieApiService.SearchAll();
    }
}
