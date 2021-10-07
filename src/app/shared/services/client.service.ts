import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '@ionic/cli/lib/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = 'http://localhost:60000/api/client';

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  getClient(id: number): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }
}
