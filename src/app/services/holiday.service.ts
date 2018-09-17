import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {IFechas} from '../fechas';
import { map } from 'rxjs/operators';

@Injectable()
export class HolidayService {
  protected url: string = environment.API_URL;
  protected response;
  constructor (
    protected http: HttpClient,
  ) {
  }

  public search() {
    console.log(this.http.get(this.url).pipe(map((res: any) => {res.json(); })));
  return  this.http.get(this.url).pipe(map((res: any) => {res.json(); }));

  }
  public list(): Observable<IFechas> {
    // console.log(this.http.get(this.url));

    return this.http.get<IFechas>(this.url);
  }
  /*
   // this.http.get(this.url).pipe(map(data => {})).subscribe(result => {
    // console.log(result); });
    // return this.http.get<IFechas>(this.url);


  getItems() {
   return this.http.get(this.url).pipe(map(data => {})).subscribe(result => {
  console.log(result); });
  }
  */
}
