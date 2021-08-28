import { Employees } from './../../../Interfaces/dialog.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  SERVER_URL = 'http://localhost:60000/api/employee'
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(`${this.SERVER_URL}/getemployees`);
  }
}
