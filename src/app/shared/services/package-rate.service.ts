import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PackageRate } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class PackageRateService {
  apiUrl = "http://localhost:60000/api/packagerate";
  constructor(
    private http: HttpClient
  ) { }

  getPackageRates(): Observable<PackageRate[]> {
    return this.http.get<PackageRate[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }
  getPackageRate(id: number): Observable<PackageRate[]> {
    return this.http.get<PackageRate[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  UpdatePackageRate(packageRate: PackageRate) {
    return this.http.put(`${this.apiUrl}/${packageRate.PackageRateId}`, packageRate)
      .pipe(map(res => res));
  }

  CreatePackageRate(packageRate: PackageRate): Observable<any> {
    return this.http.post(`${this.apiUrl}`, packageRate)
      .pipe(map(res => res));
  }

  DeletePackageRate(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  

}



