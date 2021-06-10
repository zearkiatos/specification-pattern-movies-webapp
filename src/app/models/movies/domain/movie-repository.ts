import { MovieResponse } from './movie-response';
export interface MovieRepository {

    SearchAll() : MovieResponse;
}
