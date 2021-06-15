import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  next:number = 0;
  @Output() public nextPage = new EventEmitter<number>();
  @Input() public currentPage:number = 1;
  constructor() { 
  }

  ngOnInit(): void {
  }

  goNext() {
    this.next = this.currentPage + 1;
    this.nextPage.emit(this.next);
  }

}
