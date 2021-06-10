import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';

export abstract class ApiRepository {
  private httpParams: HttpParams;
  private jsonConvert: JsonConvert;
  private head: HttpHeaders;


  constructor(private http: HttpClient) {
    this.httpParams = new HttpParams();
    this.jsonConvert = new JsonConvert();
    this.head = new HttpHeaders();
    this.head.append('Access-Control-Allow-Origin' , '*');
    this.head.append('Access-Control-Allow-Methods', '*');
    this.head.append("Accept","application/json");
    this.head.append("Content-Type","application/json");
  }
}
