import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {
  apiUrl = 'http://localhost:60000/api/employeetype/';
  constructor(
    private http: HttpClient
  ) { }

  getEmploymentStatuses(){
    return this.http.get(this.apiUrl + 'getemployeetypes/');
  }
  
  getEmploymentStatus(id){
    return this.http.get(this.apiUrl + 'getemployeetype/{id}' +id)
  }

  postEmploymentStatus(obj){
    return this.http.post(this.apiUrl + 'createemployeetype/', obj);
  }

}