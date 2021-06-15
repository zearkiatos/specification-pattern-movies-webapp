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
  public movieResponse:MovieResponse= new MovieResponse();


  constructor(private movieApiRepository: MovieApiRepository) {}

  ngOnInit(): void {
    this.movieApiRepository.SearchAll().subscribe(data =>  {
      if(data) {
        let jsonConvert: JsonConvert = new JsonConvert();
        this.movieResponse = jsonConvert.deserializeObject(data, MovieResponse);
      }
    });
  }

  nextPage(page:number) {
    console.log(page);
  }

}
