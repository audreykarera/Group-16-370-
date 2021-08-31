import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  apiUrl = 'http://localhost:60000/api/userrole/';
  constructor(
    private http: HttpClient
  ) { }

  getUserRoles(){
    return this.http.get(this.apiUrl + 'getuserroles/');
  }

  patchUserRole(obj){
    return this.http.patch(this.apiUrl + 'updateuserrole/',obj);
  }

  
  getUserRole(id){
    return this.http.get(this.apiUrl + 'getuserrole/{id}' +id)
  }

  postUserRole(obj){
    return this.http.post(this.apiUrl + 'createuserrole/', obj);
  }

  deleteUserRole(id){
    return this.http.delete(this.apiUrl +'deleteuserrole'+ id);
  }
}
  