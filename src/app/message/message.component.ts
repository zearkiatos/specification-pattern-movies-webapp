import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() typeMessage: string = "";
  @Input() header: string = "";
  @Input() message: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
