import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmploymentStatus } from 'src/app/Interfaces/Index';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmploymentStatusService {
  apiUrl = 'http://localhost:60000/api/employmentstatus';
  constructor(
    private http: HttpClient
  ) { }

  getEmploymentStatuses(): Observable<EmploymentStatus[]> {
    return this.http.get<EmploymentStatus[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  getEmployeeStatus(id: number): Observable<EmploymentStatus[]> {
    return this.http.get<EmploymentStatus[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  UpdateEmployeeStatus(employmentStatus: EmploymentStatus) {
    return this.http.put(`${this.apiUrl}/${employmentStatus.EmploymentStatusId}`, employmentStatus)
      .pipe(map(res => res));
  }

  CreateEmploymentStatus(employmentStatus: EmploymentStatus): Observable<any> {
    return this.http.post(`${this.apiUrl}`, employmentStatus)
      .pipe(map(res => res));
  }

  DeleteEmploymentStatus(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }
}
