import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from 'src/app/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl = 'http://localhost:60000/api/employee/';
  httpOptions ={
    headers: new HttpHeaders({
      ContentType: 'application/json'
    })
  }; 

  constructor(
    private http: HttpClient
  ) { }

  //Get all employee 
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}getemployee`)
    .pipe(map(res=>res));
  }

  //Get employee by id
  getEmployee(EmployeeId: number):Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}getemployee/${EmployeeId.toString()}`)
    .pipe(map(res=>res));
  }

  //
  patchEmployee(obj){
    return this.http.patch(this.apiUrl + 'updateemployee/', obj)
  }

//Post employee
  postEmployee(employee: Employee):Observable<number>{
    return this.http.post<number>(`${this.apiUrl}createemployee`, employee)
    .pipe(map(res=>res));
  }

  delete(id){
    return this.http.delete(this.apiUrl + 'deleteemployee' + id)
  }
}
