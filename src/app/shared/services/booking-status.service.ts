import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingStatusService {
  apiUrl = 'http://localhost:60000/api/bookingstatus/';
  constructor(
    private http: HttpClient
  ) { }

  getBookingStatuses(){
    return this.http.get(this.apiUrl + 'getbookingstatuses/');
  }
  
  getBookingStatus(id){
    return this.http.get(this.apiUrl + 'getbookingstatus/{id}' +id)
  }

  patchBookingStatus(obj){
    return this.http.patch(this.apiUrl + 'updatebookingstatus/',obj);
  }

  postBookingStatus(obj){
    return this.http.post(this.apiUrl + 'createbookingstatus/', obj);
  }

  deleteBookingStatus(id){
    return this.http.delete(this.apiUrl +'deletebookingstatus'+ id);
  }
  

}