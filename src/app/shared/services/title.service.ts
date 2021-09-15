import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from 'src/app/Interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  apiUrl = 'http://localhost:60000/api/title';
  constructor(
    private http: HttpClient
  ) { }

  getTitles(): Observable<Title[]> {
    return this.http.get<Title[]>(`${this.apiUrl}`)
      .pipe(map(res => res));
  }

  getTitle(id: number): Observable<Title[]> {
    return this.http.get<Title[]>(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  UpdateTitle(title: Title) {
    return this.http.put(`${this.apiUrl}/${title.TitleId}`, title)
      .pipe(map(res => res));
  }

  CreateTitle(title: Title): Observable<any> {
    return this.http.post(`${this.apiUrl}`, title)
      .pipe(map(res => res));
  }

  DeleteTitle(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(map(res => res));
  }

  // DeleteTitle(id){
  //   return this.http.delete(`${this.apiUrl}/`+ id);
  // }


}
