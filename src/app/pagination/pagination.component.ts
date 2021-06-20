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
  next: number = 0;
  prev: number = 0;
  @Output() nextPage = new EventEmitter<number>();
  @Output() prevPage = new EventEmitter<number>();
  @Input() public currentPage: number = 1;
  @Input() public quantity: number = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

  goNext() {
    this.next = this.currentPage + 1;
    this.nextPage.emit(this.next);
  }

  goPrev() {
    this.prev = this.currentPage - 1;
    this.prevPage.emit(this.prev);
  }

}
