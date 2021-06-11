import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';

@Injectable()
export class ApiBase {
  protected httpParams: HttpParams;
  protected jsonConvert: JsonConvert;
  protected head: HttpHeaders;


  constructor() {
    this.httpParams = new HttpParams();
    this.jsonConvert = new JsonConvert();
    this.head = new HttpHeaders();
    this.head.append('Access-Control-Allow-Origin' , '*');
    this.head.append('Access-Control-Allow-Methods', '*');
    this.head.append("Accept","application/json");
    this.head.append("Content-Type","application/json");
  }
}
