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

  constructor(
    private http: HttpClient
  ) { }

  //Get all employee 
  // getEmployees(): Observable<Employee[]>{
  //   return this.http.get<Employee[]>(`${this.apiUrl}getemployee`)
  //   .pipe(map(res=>res));
  // }

  getEmployees(){
    return this.http.get(this.apiUrl + 'getemployees/'); 
  }

  //Get employee by id
  getEmployee(EmployeeId: number):Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}getemployee/${EmployeeId.toString()}`)
    .pipe(map(res=>res));
  }

  //
  patchEmployee(obj){
    return this.http.patch(this.apiUrl + 'updateemployee/', obj);
  }

//Post employee
  postEmployee(obj){
    return this.http.post(this.apiUrl + 'createemployee/', obj);
  }

  delete(id){
    return this.http.delete(this.apiUrl + 'deleteemployee' + id)
  }
}
