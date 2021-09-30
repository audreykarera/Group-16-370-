import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuoteLine } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class QuoteLineService {

  //URL for QuoteLine Table
  apiUrl2 = 'http://localhost:60000/api/quoteline';

  constructor(private http: HttpClient) { }

  //////////////////////QUOTELINE TABLE/////////////////////////////
  getQuoteLines(): Observable<QuoteLine[]> {
    return this.http.get<QuoteLine[]>(`${this.apiUrl2}`)
      .pipe(map(res => res))
  }

  getQuoteLine(id: number): Observable<QuoteLine[]> {
    return this.http.get<QuoteLine[]>(`${this.apiUrl2}/${id}`)
      .pipe(map(res => res));
  }

  UpdateQuoteLine(quoteLine: QuoteLine) {
    return this.http.put(`${this.apiUrl2}/${quoteLine.QuoteLineId}`, quoteLine)
      .pipe(map(res => res));
  }

  CreateQuoteLine(quoteLine: QuoteLine): Observable<any> {
    return this.http.post(`${this.apiUrl2}`, quoteLine)
      .pipe(map(res => res));
  }

  DeleteQuote(id: number) {
    return this.http.delete(`${this.apiUrl2}/${id}`)
      .pipe(map(res => res));
  }
}
