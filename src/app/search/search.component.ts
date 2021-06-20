import { Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() valueForSearch: EventEmitter<string>;
  @Output() searchValue:string = "";
  constructor() {
    this.valueForSearch = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  search() {
    this.valueForSearch.emit(this.searchValue);
  }

}
