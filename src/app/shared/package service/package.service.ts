
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Package } from 'src/app/models/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  getPackageRates(): Observable<import("../../models/packageRate").PackageRate[]> {
    throw new Error('Method not implemented.');
  }

  SERVER_URL = 'http://localhost:60000/api/package'
  constructor(private http: HttpClient) { }

  getPackages(): Observable<Package[]> {
    console.log(`${this.SERVER_URL}/getpackage`)
    return this.http.get<Package[]>(`${this.SERVER_URL}/getpackage`).pipe(map(res=>res));
  }
}
