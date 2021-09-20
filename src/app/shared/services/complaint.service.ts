import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complaint } from 'src/app/Interfaces/Index';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  apiUrl = 'http://localhost:60000/api/complaint';
  constructor(
    private http: HttpClient
  ) { }

  getComplaints(): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  getComplaint(id: number): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  UpdateComplaint(complaint: Complaint) {
    return this.http.put(`${this.apiUrl}/${complaint.ComplaintId}`, complaint)
      .pipe(map(res => res));
  }

  CreateComplaint(complaint: Complaint): Observable<any> {
    return this.http.post(`${this.apiUrl}`, complaint)
      .pipe(map(res => res));
  }

  DeleteComplaint(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

}
