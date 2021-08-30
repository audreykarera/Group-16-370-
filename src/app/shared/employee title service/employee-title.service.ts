import { EmployeeTitle } from '../../models/employeeTitle';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTitleService {

  SERVER_URL = 'http://localhost:60000/api/title'
  constructor(private http: HttpClient) { }

  getTitles(): Observable<EmployeeTitle[]> {
    console.log(`${this.SERVER_URL}/gettitles`)
    return this.http.get<EmployeeTitle[]>(`${this.SERVER_URL}/gettitles`).pipe(map(res=>res));
  }
}