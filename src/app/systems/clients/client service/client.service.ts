import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from 'src/app/Interfaces/dialog.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  SERVER_URL = 'http://localhost:60000/api/client'
  constructor(private http: HttpClient) { }

  getClients(): Observable<Clients[]> {
    return this.http.get<Clients[]>(`${this.SERVER_URL}/getclients`);
  }
}
