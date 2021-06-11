import { MovieRepository } from "../domain/movie-repository";
import { MovieResponse } from "../domain/movie-response";
import { MovieApiService } from "../services/movie-api.service";

export class MovieApiRepository implements MovieRepository {
    SearchAll(): MovieResponse {
        let movieResponse = MovieApiService.SearchAll();
    }
}
