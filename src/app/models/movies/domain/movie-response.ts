import { JsonObject, JsonProperty } from 'json2typescript';
import { Movie } from './movie';

@JsonObject("movieResponse")
export class MovieResponse {
    @JsonProperty("movieCount")
    private movieCount: number = 0;

    public get MovieCount(): number {
        return this.movieCount;
    }

    public set MovieCount(movieCount: number) {
        this.movieCount = movieCount;
    }

    @JsonProperty("limit")
    private limit: number = 0;

    public get Limit(): number {
        return this.limit;
    }

    public set Limit(limit: number) {
        this.limit = limit;
    }

    @JsonProperty("pageNumber")
    private pageNumber: number = 0;

    public get PageNumber(): number {
        return this.pageNumber;
    }

    public set PageNumber(pageNumber: number) {
        this.pageNumber = pageNumber;
    }

    @JsonProperty("movies")

    private movies: Movie[] = [];

    public get Movies(): Movie[] {
        return this.movies;
    }

    public set Movies(movies: Movie[]) {
        this.movies = movies;
    }

}