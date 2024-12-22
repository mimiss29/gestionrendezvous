import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  private apiUrl = `http://127.0.0.1:8000/api`;


  constructor(private http: HttpClient) {}

  searchMedecins(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.API_URL}?query=${query}`);
  }
  getMedecinDashboard(): Observable<any> {
    return this.http.get(`${environment.API_URL}/medecin/dashboard`);
  }

  getRendezvousByMedecin(): Observable<any> {
    return this.http.get(`${environment.API_URL}/medecin/rendezvous`);
  }

  getMedecinProfile(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/medecin/profile`);
  }

  

  getMedecinDetails(medecinId: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/medecins/${medecinId}`);
  }

  getMedecinById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/medecins/${id}`);
  }

  getMedecins(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.API_URL}/medecins`);
  }

  getSlotsByMedecin(medecinId: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/slots/medecin/${medecinId}`);
  }
}
