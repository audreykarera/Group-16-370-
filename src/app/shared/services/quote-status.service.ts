import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuoteStatus } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class QuoteStatusService {
  apiUrl = "http://localhost:60000/api/quotestatus";
  constructor(
    private http: HttpClient
  ) { }

  getQuoteStatuses(): Observable<QuoteStatus[]> {
    return this.http.get<QuoteStatus[]>(`${this.apiUrl}`)
    .pipe(map(res => res));
  }

  getQuoteStatus(id: number): Observable<QuoteStatus[]> {
    return this.http.get<QuoteStatus[]>(`${this.apiUrl}/${id}`)
    .pipe(map(res => res));
  }

  UpdateQuoteStatus(quoteStatus: QuoteStatus){
    return this.http.put(`${this.apiUrl}/${quoteStatus.quoteStatusId}`, quoteStatus)
    .pipe(map(res => res));
  }

  CreateQuoteStatus(quoteStatus: QuoteStatus): Observable<any> {
    return this.http.post(`${this.apiUrl}`, quoteStatus)
    .pipe(map(res => res));
  }

  DeleteQuoteStatus(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`)
    .pipe(map(res => res));
  }

}
