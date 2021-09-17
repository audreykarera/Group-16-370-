import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SlotStatus } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class SlotStatusService {

  apiUrl = 'http://localhost:60000/api/slotstatus';
  constructor( private http: HttpClient) { }

  getSlotStatuses(): Observable<SlotStatus[]> {
  return this.http.get<SlotStatus[]>(`${this.apiUrl}`)
  .pipe(map(res => res));
}

getSlotStatus(id: number): Observable<SlotStatus[]> {
  return this.http.get<SlotStatus[]>(`${this.apiUrl}/${id}`)
    .pipe(map(res => res));
}

UpdateSlotStatus(slotStatus: SlotStatus) {
  return this.http.put(`${this.apiUrl}/${slotStatus.SlotStatusId}`, slotStatus)
    .pipe(map(res => res));
}

CreateSlotStatus(slotStatus: SlotStatus): Observable<any> {
  return this.http.post(`${this.apiUrl}`, slotStatus)
    .pipe(map(res => res));
}

DeleteSlotStatus(id: number) {
  return this.http.delete(`${this.apiUrl}/${id}`)
    .pipe(map(res => res));
}



}
