
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeType } from 'src/app/Interfaces/Index';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {
  apiUrl = 'http://localhost:60000/api/employeetype';
  constructor(
    private http: HttpClient
  ) { }

  getEmployeeTypes(): Observable<EmployeeType[]> {
    return this.http.get<EmployeeType[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }
  
  getEmployeeType(id: number): Observable<EmployeeType[]> {
    return this.http.get<EmployeeType[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  UpdateEmployeeType(employeeType: EmployeeType) {
    return this.http.put(`${this.apiUrl}/${employeeType.EmployeeTypeId}`, employeeType)
      .pipe(map(res => res));
  }

  CreateEmployeeType(employeeType: EmployeeType): Observable<any> {
    return this.http.post(`${this.apiUrl}`, employeeType)
      .pipe(map(res => res));
  }

  DeleteEmployeeType(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

}