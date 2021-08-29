
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PackageRate } from 'src/app/models/packageRate';


@Injectable({
  providedIn: 'root'
})
export class PackageRateService {
  
  SERVER_URL = 'http://localhost:60000/api/packagerate'
  constructor(private http: HttpClient) { }

  getPackageRates(): Observable<PackageRate[]> {
    console.log(`${this.SERVER_URL}/getpackagerate`)
    return this.http.get<PackageRate[]>(`${this.SERVER_URL}/getpackagerate`).pipe(map(res=>res));
  }
}
