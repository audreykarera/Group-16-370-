import { Booking } from './../../Interfaces/Index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  apiUrl = "http://localhost:60000/api/booking";
  constructor(
    private http: HttpClient
  ) { }

    getBookings(): Observable<Booking[]> {
      return this.http.get<Booking[]>(`${this.apiUrl}`)
        .pipe(map(res => res));
    }
  //Get Booking by Id
    getBooking(BookingId: number): Observable<Booking[]> {
      return this.http.get<Booking[]>(`${this.apiUrl}/${BookingId}`)
        .pipe(map(res => res));
    }
  
    UpdateBooking(booking: Booking) {
      return this.http.put(`${this.apiUrl}/${booking.bookingId}`, booking)
        .pipe(map(res => res));
    }
  
    CreateBooking(booking: Booking): Observable<any> {
      return this.http.post(`${this.apiUrl}`, booking)
        .pipe(map(res => res));
    }
  
    DeleteBooking(id: number) {
      return this.http.delete(`${this.apiUrl}/${id}`)
        .pipe(map(res => res));
    }
    
  
}

