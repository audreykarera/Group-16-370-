import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Package } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  apiUrl="http://localhost:60000/api/package";

  constructor(
    private http:HttpClient
    ) { }
    getPackages(): Observable<Package[]> {
      return this.http.get<Package[]>(`${this.apiUrl}`)
        .pipe(map(res => res));
    }
    getPackage(id: number): Observable<Package[]> {
      return this.http.get<Package[]>(`${this.apiUrl}/${id}`)
        .pipe(map(res => res));
    }
    UpdatePackage(packages: Package) {
      return this.http.put(`${this.apiUrl}/${packages.PackageId}`, packages)
        .pipe(map(res => res));
    }

    CreatePackage(packages: Package): Observable<any> {
      return this.http.post(`${this.apiUrl}`, packages)
        .pipe(map(res => res));
    }
    
    DeletePackage(id: number) {
      return this.http.delete(`${this.apiUrl}/${id}`)
        .pipe(map(res => res));
    }
  
 
    

}
