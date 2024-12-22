import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MedecinDashboardService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  // Méthode pour récupérer les en-têtes avec le token d'authentification
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getMedecinDashboard(): Observable<any> {
    return this.httpClient.get(`${environment.API_URL}/medecin/dashboard`);
  }

  getRendezvousByMedecin(): Observable<any> {
    return this.httpClient.get(`${environment.API_URL}/medecin/rendezvous`);
  }

  // getMedecinDisponibilites(medecinId: number): Observable<any> {
  //   return this.httpClient.get(`${environment.API_URL}/users/${medecinId}/disponibilites`);
  // }

  // Gestion des Rendez-vous
  getRendezvous(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.httpClient.get(`${environment.API_URL}/rendezvous`, { headers });
  }
  getMedecinProfile(): Observable<any> {
    return this.httpClient.get<any>(`${environment.API_URL}/medecin/profile`);
  }
}
