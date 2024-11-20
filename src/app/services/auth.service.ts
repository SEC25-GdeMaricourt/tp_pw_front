import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users/auth';

  constructor(private http: HttpClient) { }

  authenticate(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}