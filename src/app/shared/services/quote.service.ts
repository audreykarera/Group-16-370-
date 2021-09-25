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
  //URL for QuoteLine Table
  apiUrl2 = 'http://localhost:60000/api/quoteline';

  apiUrlServicePrice = 'http://localhost:60000/api/serviceprice';
  constructor( private http: HttpClient) { }

  //////////////////////SERVICEPRICE TABLE//////////////////////////
   getQuoteServicePrice(): Observable<ServicePrice[]> {
     return this.http.get<ServicePrice[]>(`${this.apiUrlServicePrice}`)
     .pipe(map(res => res))
   }

   getQuoteServicePrices(id: number): Observable<ServicePrice[]> {
     return this.http.get<ServicePrice[]>(`${this.apiUrlServicePrice}/${id}`)
    .pipe(map(res => res));
   }
  //////////////////////QUOTELINE TABLE/////////////////////////////
  // getQuoteLines(): Observable<QuoteLine[]> {
  //   return this.http.get<QuoteLine[]>(`${this.apiUrl2}`)
  //   .pipe(map(res => res))
  // }

  // getQuoteLine(id: number): Observable<QuoteLine[]> {
  //   return this.http.get<QuoteLine[]>(`${this.apiUrl2}/${id}`)
  //   .pipe(map(res => res));
  // }

  //  UpdateQuoteLine(quoteLine: QuoteLine) {
  //    return this.http.put(`${this.apiUrl2}/${quoteLine.QuoteLineId}`, quoteLine)
  //    .pipe(map(res => res));
  //  }

  // CreateQuoteLine(quoteLine: QuoteLine): Observable<any>{
  //   return this.http.post(`${this.apiUrl2}`, quoteLine)
  //   .pipe(map(res => res));
  // }

    // DeleteQuote(id: number) {
    //   return this.http.delete(`${this.apiUrl2}/${id}`)
    //   .pipe(map(res => res));
    // }

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
