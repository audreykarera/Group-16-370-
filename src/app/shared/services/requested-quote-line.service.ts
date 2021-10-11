import { RequestedQuoteLine } from './../../Interfaces/Index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestedQuoteLineService {

  apiUrl = 'http://localhost:60000/api/requestedquoteline';

  constructor(private http: HttpClient) { }

  getRequestedQuoteLines(): Observable<RequestedQuoteLine[]> {
    return this.http.get<RequestedQuoteLine[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  CreateRequestedQuoteLine(requestedQuoteLine: RequestedQuoteLine): Observable<any>{
    return this.http.post(`${this.apiUrl}`, requestedQuoteLine)
    .pipe(map(res=>res));
  }
}
