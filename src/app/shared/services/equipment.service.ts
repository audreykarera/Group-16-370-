import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Equipment } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  apiUrl = 'http://localhost:60000/api/equipment';

  constructor(
    private http: HttpClient
  ) { }

  getEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  getEquipment(id: number): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }


  UpdateEquipment(equipment: Equipment) {
    return this.http.put(`${this.apiUrl}/${equipment.EquipmentId}`, equipment)
      .pipe(map(res => res));
  }

 CreateEquipment(equipment: Equipment): Observable<any> {
   return this.http.post(`${this.apiUrl}`, equipment)
   .pipe(map(res => res));
 }

  DeleteEquipment(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

}
