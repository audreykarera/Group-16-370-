import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
apiUrl="http://localhost:60000/api/province/";

  constructor(private http:HttpClient) { }

  getProvinces(){
    return this.http.get(this.apiUrl + 'getprovince/');
  }  

  getProvinceId(id){
    return this.http.get(this.apiUrl+'getprovince'+id);
  }

  patchProvince(obj){
    return this.http.patch(this.apiUrl + 'updateprovince/', obj);
  }

  postProvince(obj){
    return this.http.post(this.apiUrl +'createprovince/', obj);
  } 

  deleteProvince(id){
    return this.http.delete(this.apiUrl +'deleteprovince'+ id);
  }
  
}
