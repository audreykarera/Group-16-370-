import { RequestedQuote } from './../../Interfaces/Index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestedQuoteService {

  apiUrl = 'http://localhost:60000/api/requestedquote';
  constructor(private http: HttpClient) { }


  getRequestedQuotes(): Observable<RequestedQuote[]> {
    return this.http.get<RequestedQuote[]>(`${this.apiUrl}`)
   .pipe(map(res => res));
  }

  getRequestedQuote(id: number): Observable<RequestedQuote[]> {
    return this.http.get<RequestedQuote[]>(`${this.apiUrl}/${id}`)
    .pipe(map(res => res));
  }


  CreateRequestedQuote(requestedQuote: RequestedQuote): Observable<any>{
    return this.http.post(`${this.apiUrl}`, requestedQuote)
    .pipe(map(res => res));
  }

}
