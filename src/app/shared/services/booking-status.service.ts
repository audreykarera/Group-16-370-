import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookingStatus } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class BookingStatusService {
  apiUrl = 'http://localhost:60000/api/bookingstatus';
  constructor(
    private http: HttpClient
  ) { }

  getBookingStatuses(): Observable<BookingStatus[]> {
    return this.http.get<BookingStatus[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  getBookingStatus(id: number): Observable<BookingStatus[]> {
    return this.http.get<BookingStatus[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  UpdateBookingStatus(bookingstatus: BookingStatus) {
    return this.http.put(`${this.apiUrl}/${bookingstatus.BookingStatusId}`, bookingstatus)
      .pipe(map(res => res));
  }

  CreateBookingStatus(bookingstatus: BookingStatus): Observable<any> {
    return this.http.post(`${this.apiUrl}`, bookingstatus)
      .pipe(map(res => res));
  }

  DeleteBookingStatus(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  // DeleteTitle(id){
  //   return this.http.delete(`${this.apiUrl}/`+ id);
  // }


}

  

