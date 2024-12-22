import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = `environment.API_URL}`;
  

  constructor(private http: HttpClient) {}

 

  getMedecinDetails(medecinId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/medecins/${medecinId}`);
  }

  getAvailableSlots(medecinId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/medecins/${medecinId}/slots`);
  }

  getAllMedecins(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/medecins`);
  }
}
