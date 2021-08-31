import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  apiUrl = 'http://localhost:60000/api/title/';
  constructor(
    private http: HttpClient
  ) { }

  getTitles(){
    return this.http.get(this.apiUrl + 'gettitles/');
  }

  patchTitle(obj){
    return this.http.patch(this.apiUrl + 'updatetitle/',obj);
  }

  
  getTitle(id){
    return this.http.get(this.apiUrl + 'gettitle/{id}' +id)
  }

  postTitle(obj){
    return this.http.post(this.apiUrl + 'createtitle/', obj);
  }

  deleteTitle(id){
    return this.http.delete(this.apiUrl +'deletetitle'+ id);
  }
  

}
