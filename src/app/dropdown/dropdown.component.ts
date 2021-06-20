import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() emptyData: string;
  @Input() list: any[] = [];
  @Output() itemSelected = new EventEmitter<any>()
  constructor() {
    this.emptyData = "";
   }

  ngOnInit(): void {
  }

  onChange(obj:any) {
    const { value } = obj.target;
    this.itemSelected.emit(value);
  }

}
