import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookingServices } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {
  apiUrl = 'http://localhost:60000/api/bookingservice';

  constructor(
    private http: HttpClient
  ) { }
  getBookingServices(): Observable<BookingServices[]> {
    return this.http.get<BookingServices[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  CreateBookingService(bookingService: BookingServices): Observable<any>{
    return this.http.post(`${this.apiUrl}`, bookingService)
    .pipe(map(res=>res));
  }
}
