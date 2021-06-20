import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader-card',
  templateUrl: './skeleton-loader-card.component.html',
  styleUrls: ['./skeleton-loader-card.component.scss']
})
export class SkeletonLoaderCardComponent implements OnInit {

  @Input()
  public quantity:number = 0;

  @Output()
  public fakeArray:any;
  constructor() { }

  ngOnInit(): void {
    this.fakeArray = new Array(this.quantity);
  }

}
