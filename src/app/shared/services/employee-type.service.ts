
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

  getEmployeeType(){
    return this.http.get(this.apiUrl + 'getemployeetypes/');
  }
  
  getEmployeeTypes(id){
    return this.http.get(this.apiUrl + 'getemployeetype/' +id)
  }

  patchEmployeeType(obj){
    return this.http.patch(this.apiUrl + 'updateemployeetype/',obj);
  }

  postEmployeeType(obj){
    return this.http.post(this.apiUrl + 'createemployeetype/', obj);
  }

  deleteEmployeeType(id){
    return this.http.delete(this.apiUrl +'deleteemployeetype'+ id);
  }
  

}