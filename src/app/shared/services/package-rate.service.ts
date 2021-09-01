import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageRateService {
  apiUrl = "http://localhost:60000/api/packagerate/";
  constructor(
    private http: HttpClient
  ) { }

  getPackageRate() {
    return this.http.get(this.apiUrl + 'getpackagerate/');
  }

  getPackageRateId(id) {
    return this.http.get(this.apiUrl + 'getpackagerateid' + id);
  }

  patchPackageRate(obj) {
    return this.http.patch(this.apiUrl + 'updatepackagerate/', obj);
  }

  postPackageRate(obj) {
    return this.http.post(this.apiUrl + 'createpackagerate/', obj);
  }

  deletePackageRate(id) {
    return this.http.delete(this.apiUrl + 'deletepackagerate' + id);
  }
  getPackageRateName(name){
    return this.http.get(this.apiUrl + 'getpackageratebyamount' + name); 
  }
  

}



