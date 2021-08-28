import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Interfaces/dialog.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  SERVER_URL = 'http://localhost:60000/api/user'
  constructor(private http:HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.SERVER_URL}/getusers`);
  }
}
