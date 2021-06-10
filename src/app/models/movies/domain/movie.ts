import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject("movieResponse")
export class Movie {
    @JsonProperty("id")
    private id: number = 0;

    public get Id(): number {
        return this.id;
    }

    public set Id(id: number) {
        this.id = id;
    }

    @JsonProperty("url")
    private url: string = '';

    public get Url(): string {
        return this.url;
    }

    public set Url(url: string) {
        this.url = url;
    }

    @JsonProperty("title")
    private title: string = '';

    public get Title(): string {
        return this.title;
    }

    public set Title(title: string) {
        this.title = title;
    }

    @JsonProperty("year")
    private year: number = 0;

    public get Year(): number {
        return this.year;
    }

    public set Year(year: number) {
        this.year = year;
    }

    @JsonProperty("summary")
    private summary: string = '';

    public get Summary(): string {
        return this.summary;
    }

    public set Summary(summary: string) {
        this.summary = summary;
    }

    @JsonProperty("genres")
    private genres: string[] = [];

    public get Genres(): string[] {
        return this.genres;
    }

    public set Genres(genres: string[]) {
        this.genres = genres;
    }

    @JsonProperty("description")
    private description: string = '';

    public get Description(): string {
        return this.description;
    }

    public set Descripton(description: string) {
        this.description = description;
    }

    @JsonProperty("youtubeTrailerCode")
    private youtubeTrailerCode: string = '';

    public get YoutubeTrailerCode(): string {
        return this.youtubeTrailerCode;
    }

    public set YoutubeTrailerCode(youtubeTrailerCode: string) {
        this.youtubeTrailerCode = youtubeTrailerCode;
    }

    @JsonProperty("backgroundImage")
    private backgroundImage: string = '';

    public get BackgroundImage(): string {
        return this.backgroundImage;
    }

    public set BackgroundImage(backgroundImage: string) {
        this.backgroundImage = backgroundImage;
    }

    @JsonProperty("mediumCoverImage")
    private mediumCoverImage: string = '';

    public get MediumCoverImage(): string {
        return this.mediumCoverImage;
    }

    public set MediumCoverImage(mediumCoverImage: string) {
        this.mediumCoverImage = mediumCoverImage;
    }

    @JsonProperty("runtime")
    private runtime: number = 0;

    public get Runtime(): number {
        return this.runtime;
    }

    public set Runtime(runtime: number) {
        this.runtime = runtime;
    }

    @JsonProperty("runtime")
    private rating: number = 0.0;

    public get Rating(): number {
        return this.rating;
    }

    public set Rating(rating: number) {
        this.rating = rating;
    }
}