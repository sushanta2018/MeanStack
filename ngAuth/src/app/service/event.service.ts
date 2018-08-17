import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Event } from '../model/event';


@Injectable()
export class EventService {

  private _getUrl = "http://localhost:3000/api/event/";

  constructor(private _http: Http) { }

  getData() {
    return this._http.get(this._getUrl)
      .pipe(map((response: Response) => response.json()));
  }
  
  getDataByID(evt: Event) {
    return this._http.get(this._getUrl + evt._id)
      .pipe(map((response: Response) => response.json()));
  }

 addNewevent(evt: Event) {
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
   return this._http.post(this._getUrl, JSON.stringify(evt), options)
    .pipe(map((res: Response) => res.json()));
 }

 updateEvent(evt: Event) {
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this._getUrl + evt._id, JSON.stringify(evt), options)
      .pipe(map((res: Response) => res.json()));
 }

 deleteData(evt: Event){
    return this._http.delete(this._getUrl + evt._id)
      .pipe(map((res: Response) => res.json()));
 }

}
