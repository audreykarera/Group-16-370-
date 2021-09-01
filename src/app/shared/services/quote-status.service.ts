import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteStatusService {
  apiUrl = 'http://localhost:60000/api/quotestatus/';
  constructor(
    private http: HttpClient
  ) { }

  getQuoteStatuses(){
    return this.http.get(this.apiUrl + 'getquotestatuses/');
  }
  
  getQuoteStatus(id){
    return this.http.get(this.apiUrl + 'getquotestatus/{id}' +id)
  }
  patchQuoteStatus(id){
    return this.http.patch(this.apiUrl + 'updatestatus/', + id)
  }

  postQuoteStatus(obj){
    return this.http.post(this.apiUrl + 'createquotestatus/', obj);
  }

  deleteQuoteStatus(id){
    return this.http.delete(this.apiUrl +'deletequotestatus'+ id);
  }
}


