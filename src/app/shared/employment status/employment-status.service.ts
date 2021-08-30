import { EmploymentStatus } from './../../models/employmentStatus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmploymentStatusService {
  SERVER_URL = 'http://localhost:60000/api/employmentstatus'
  constructor(private http: HttpClient) { }

  getEmploymentStatus(): Observable<EmploymentStatus[]> {
    console.log(`${this.SERVER_URL}/getemploymentstatus`)
    return this.http.get<EmploymentStatus[]>(`${this.SERVER_URL}/getemploymentstatus`).pipe(map(res=>res));
  }
}
