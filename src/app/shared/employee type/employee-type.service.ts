import { EmployeeType } from './../../models/employeeType';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {
  SERVER_URL = 'http://localhost:60000/api/employeetype'
  constructor(private http: HttpClient) { }

  getEmployeeType(): Observable<EmployeeType[]> {
    console.log(`${this.SERVER_URL}/getemployeetypes`)
    return this.http.get<EmployeeType[]>(`${this.SERVER_URL}/getemployeetypes`).pipe(map(res=>res));
  }
}
