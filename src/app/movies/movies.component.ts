import { Component, Input, OnInit, Output } from '@angular/core';
import { JsonConvert } from 'json2typescript';
import { MovieResponse } from './domain/movie-response';
import { MovieApiRepository } from './Infrastructure/movie-api-repository';
import { MovieApiService } from './services/movie-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [
    MovieApiRepository,
    MovieApiService
  ]
})
export class MoviesComponent implements OnInit {
  @Output()
  public movieResponse: MovieResponse = new MovieResponse();
  private criterial: any;
  @Input()
  public year: number | undefined;
  @Input()
  public title: string | undefined;


  constructor(private movieApiRepository: MovieApiRepository) { }

  ngOnInit(): void {
    this.movieApiRepository.SearchAll().subscribe(data => {
      if (data) {
        let jsonConvert: JsonConvert = new JsonConvert();
        this.movieResponse = jsonConvert.deserializeObject(data, MovieResponse);
      }
    });
  }

  ngOnChanges(): void {
    if (this.year) {
      this.criterial = {
        ...this.criterial,
        filters: [{
          "field": "Year",
          "operator": ">=",
          "value": this.year
        }]
      };
    }

    if (this.title) {
      this.criterial = {
        ...this.criterial,
        filters: [{
          "field": "Title",
          "operator": "like",
          "value": this.title
        }]
      };
    }

    console.log(this.criterial);

    this.movieApiRepository.SearchByCriterial(this.criterial).subscribe(data => {
      if (data) {
        let jsonConvert: JsonConvert = new JsonConvert();
        this.movieResponse = jsonConvert.deserializeObject(data, MovieResponse);
      }
    });
  }



  goToPage(page: any): void {
    this.criterial = {
      ...this.criterial,
      offset: page
    };
    this.movieApiRepository.SearchByCriterial(this.criterial).subscribe(data => {
      if (data) {
        let jsonConvert: JsonConvert = new JsonConvert();
        this.movieResponse = jsonConvert.deserializeObject(data, MovieResponse);
      }
    });
  }
}
