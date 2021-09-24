import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeDateTimeSlot } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class EmployeedatetimeslotService {
  apiUrl = 'http://localhost:60000/api/employeedatetimeslot';

  constructor(
    private http: HttpClient
  ) { }

  getEmployeeDateTimeSlots(): Observable<EmployeeDateTimeSlot[]> {
    return this.http.get<EmployeeDateTimeSlot[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }
}
