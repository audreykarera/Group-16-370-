import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmploymentStatusService {
  apiUrl = 'http://localhost:60000/api/employmentstatus/';
  constructor(
    private http: HttpClient
  ) { }

  getEmploymentStatuses(){
    return this.http.get(this.apiUrl + 'getemploymentstatus/');
  }
  
  getEmploymentStatus(id){
    return this.http.get(this.apiUrl + 'getemploymentstatus/{id}' +id)
  }

  patchEmploymentStatus(obj){
    return this.http.patch(this.apiUrl + 'updatemploymentstatus/',obj);
  }

  postEmploymentStatus(obj){
    return this.http.post(this.apiUrl + 'createemploymentstatus/', obj);
  }

  deleteEmploymentStatus(id){
    return this.http.delete(this.apiUrl +'deleteemployeestatus'+ id);
  }
}
