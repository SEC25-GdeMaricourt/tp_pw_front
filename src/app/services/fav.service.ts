import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavsService {
  private apiUrl = 'http://localhost:3000/favs';

  constructor(private http: HttpClient) { }

  createFav(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  getFavsByUser(id_user: number): Observable<any[]> {
    const url = `${this.apiUrl}/user/${id_user}`;
    return this.http.get<any[]>(url);
  }

  deleteFav(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}