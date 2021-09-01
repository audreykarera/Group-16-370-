
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Package } from 'src/app/models/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  apiUrl="http://localhost:60000/api/package/";

  constructor(
    private http:HttpClient
    ) { }

 
    getPackages() {
      return this.http.get(this.apiUrl + 'getpackage/');
    }
  
    getPackageId(id) {
      return this.http.get(this.apiUrl + 'getpackageid' + id);
    }
  
    patchPackage(obj) {
      return this.http.patch(this.apiUrl + 'updatepackage/', obj);
    }
  
    postPackage(obj) {
      return this.http.post(this.apiUrl + 'createpackage/', obj);
    }
  
    deletePackage(id) {
      return this.http.delete(this.apiUrl + 'deletepackage/' + id);
    }
    getPackagebyName(name){
      return this.http.get(this.apiUrl + 'getpackagebyname' + name); 
    }
  

}
