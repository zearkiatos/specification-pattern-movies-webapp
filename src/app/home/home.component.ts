import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value = "Search a movie";
  constructor() { }

  ngOnInit(): void {
  }

  goToNextPage (page: any) {
    console.log("Data");
    console.log(`Data: ${page}`);
  }

}
