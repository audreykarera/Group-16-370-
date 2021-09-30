import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Quote, QuoteLine, ServicePrice } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  //URL for Quote Table
   apiUrl = 'http://localhost:60000/api/quote';


  constructor( private http: HttpClient) { }


  //////////////////////QUOTE TABLE/////////////////////////////////
   getQuotes(): Observable<Quote[]> {
     return this.http.get<Quote[]>(`${this.apiUrl}`)
    .pipe(map(res => res));
   }

   getQuote(id: number): Observable<Quote[]> {
     return this.http.get<Quote[]>(`${this.apiUrl}/${id}`)
     .pipe(map(res => res));
   }

  //  UpdateQuote(quote: Quote) {
  //    return this.http.put(`${this.apiUrl}/${quote.QuoteId}`, quote)
  //    .pipe(map(res => res));
  //  }

   CreateQuote(quote: Quote): Observable<any>{
     return this.http.post(`${this.apiUrl}`, quote)
     .pipe(map(res => res));
   }

  // DeleteQuote(id: number) {
  //   return this.http.delete(`${this.apiUrl}/${id}`)
  //     .pipe(map(res => res));
  // }

}
