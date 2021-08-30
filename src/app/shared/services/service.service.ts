import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Service } from 'src/app/models/service';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
apiUrl="http://localhost:60000/api/service/";

  constructor(
    private http:HttpClient
    ) { }

 
  getServices(){
    return this.http.get(this.apiUrl + 'getservice/');
  }  

  postService(obj){
    return this.http.get(this.apiUrl +'createservice/', obj);
  }

  //edit

  deleteService(id){
    return this.http.delete(this.apiUrl +'deletesupplier'+id);
  }

}
