import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value = "Search a movie";
  yearsList:number[] = []
  yearFilter:number | undefined;
  constructor() { }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for(let year= 1900; year <= currentYear; year++)
      this.yearsList.push(year);
  }

  filterByYear(year:any) {
    this.yearFilter = year;
  }

}
