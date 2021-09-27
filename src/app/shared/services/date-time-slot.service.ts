import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateTimeSlot } from 'src/app/Interfaces/Index';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DateTimeSlotService {
  apiUrl = 'http://localhost:60000/api/datetimeslot';

  constructor(
    private http: HttpClient
  ) { }

  getDateTimeSlots(): Observable<DateTimeSlot[]> {
    return this.http.get<DateTimeSlot[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  CreateDateTimeSlot(dateTimeSlot: DateTimeSlot): Observable<any>{
    return this.http.post(`${this.apiUrl}`, dateTimeSlot)
    .pipe(map(res=>res));
  }

  DeleteDateTimeSlot(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  UpdateDateTimeSlot(dateTimeSlot: DateTimeSlot) {
    return this.http.put(`${this.apiUrl}/${dateTimeSlot.DateTimeSlotId}`, dateTimeSlot)
      .pipe(map(res => res));
  }

}
