import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Package } from 'src/app/Interfaces/dialog.interface';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  SERVER_URL = 'http://localhost:60000/api/package'
  constructor(private http:HttpClient) { }

  getPackage(): Observable<Package[]> {
    return this.http.get<Package[]>(`${this.SERVER_URL}/getpackage`);
  }
}
