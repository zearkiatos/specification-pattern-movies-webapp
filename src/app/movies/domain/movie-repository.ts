import { Observable } from "rxjs";
import { MovieResponse } from "./movie-response";

export interface MovieRepository {
    SearchAll(): Observable<MovieResponse>;

    SearchByCriterial(body:any): Observable<MovieResponse>;
}
