import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuburbService {
  apiUrl="http://localhost:60000/api/suburb/";

  constructor(private http:HttpClient) { }

 
  getSuburbs(){
    return this.http.get(this.apiUrl + 'getsuburb/');
  }  

  getSuburbId(id){
    return this.http.get(this.apiUrl+'getsuburb'+id);
  }

  patchSuburb(obj){
    return this.http.patch(this.apiUrl + 'updatesuburb/', obj);
  }

  postSuburb(obj){
    return this.http.post(this.apiUrl +'createsuburb/', obj);
  } 

  deleteSuburb(id){
    return this.http.delete(this.apiUrl +'deletesuburb'+ id);
  }
}
