import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookingService } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})

export class BookingServiceService {
  apiUrl = "http://localhost:60000/api/bookingservice";
  constructor(
    private http: HttpClient
  ) { }

  getBookingServices(): Observable<BookingService[]> {
    return this.http.get<BookingService[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  getBookingService(id: number): Observable<BookingService[]> {
    return this.http.get<BookingService[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  UpdateBookingService(booking: BookingService) {
    return this.http.put(`${this.apiUrl}/${booking.BookingServiceId}`, booking)
      .pipe(map(res => res));
  }

  CreateBookingService(booking: BookingService): Observable<any> {
    return this.http.post(`${this.apiUrl}`, booking)
      .pipe(map(res => res));
  }

  DeleteBookingService(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }
}
