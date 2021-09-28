import { CollectionNote } from './../../Interfaces/Index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollectionNoteService {

  apiUrl = 'http://localhost:60000/api/collectionnote'
  
  constructor(
    private http: HttpClient
  ) { }
  getCollectionNotes(): Observable<CollectionNote[]> {
    return this.http.get<CollectionNote[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }
  getCollectionNote(id: number): Observable<CollectionNote[]> {
    return this.http.get<CollectionNote[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }
  UpdateCollectionNote(collectionnote:CollectionNote) {
     return this.http.put(`${this.apiUrl}/${collectionnote.CollectionNoteId}`, collectionnote)
     .pipe(map(res => res));
   }
   CreateCollectionNote(collectionnote: CollectionNote): Observable<any> {
    return this.http.post(`${this.apiUrl}`, collectionnote)
      .pipe(map(res => res));
   }
   DeleteCollectionNote(id: number) {
     return this.http.delete(`${this.apiUrl}/${id}`)
       .pipe(map(res => res));
   }
}
