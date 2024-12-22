import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialitesService {
  private apiUrl = `${environment.API_URL}/specialites`;

  constructor(
    private http: HttpClient,
 
  ) { }

  getSpecialites(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  searchSpecialites(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?nom=${query}`);
  }
  
  
}


  
