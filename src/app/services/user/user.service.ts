import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  // Méthode pour récupérer les en-têtes avec le token d'authentification
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Gestion des Médecins
  getMedecins(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.API_URL}/medecins`);
  }

  addMedecin(medecin: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.API_URL}/medecins`, medecin);
  }

  updateMedecin(id: number, medecin: any): Observable<any> {
    return this.httpClient.put<any>(`${environment.API_URL}/medecins/${id}`, medecin);
  }

  deleteMedecin(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.API_URL}/medecins/${id}`);
  }

  getMedecinDetails(medecinId: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.API_URL}/users/${medecinId}`);
  }

  getMedecinDisponibilites(medecinId: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.API_URL}/users/${medecinId}/disponibilites`);
  }

  // Gestion des Utilisateurs
  getAllUsers(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.httpClient.get(`${environment.API_URL}/users`, { headers });
  }

  saveUser(data: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.httpClient.post(`${environment.API_URL}/users`, data, { headers });
  }

  deleteUser(id: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.httpClient.delete(`${environment.API_URL}/users/${id}`, { headers });
  }

  updateUser(id: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.httpClient.put(`${environment.API_URL}/users/${id}`, { headers });
  }

  getUsersByType(type: string): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.httpClient.get(`${environment.API_URL}/users/type/${type}`, { headers });
  }

  // Gestion des Clients
  getClients(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.httpClient.get(`${environment.API_URL}/clients`, { headers });
  }

  // Gestion des Rendez-vous
  getRendezvous(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.httpClient.get(`${environment.API_URL}/rendezvous`, { headers });
  }

  saveRendezvous(data: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.httpClient.post(`${environment.API_URL}/rendezvous`, data, { headers });
  }

  deleteRendezvous(id: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.httpClient.delete(`${environment.API_URL}/rendezvous/${id}`, { headers });
  }

  // Gestion du Profil Médecin
  getMedecinProfile(): Observable<any> {
    return this.httpClient.get(`${environment.API_URL}/medecin/profile`);
  }

  updateMedecinProfile(profile: any): Observable<any> {
    return this.httpClient.put(`${environment.API_URL}/medecin/profile`, profile);
  }

  createMedecinSlot(slot: any): Observable<any> {
    return this.httpClient.post(`${environment.API_URL}/medecin/disponibilites`, slot);
  }

  updateMedecinSlot(id: number, slot: any): Observable<any> {
    return this.httpClient.put(`${environment.API_URL}/medecin/disponibilites/${id}`, slot);
  }

  deleteMedecinSlot(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.API_URL}/medecin/disponibilites/${id}`);
  }

  // Gestion des Patients
  getPatients(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.API_URL}/patients`); // Assurez-vous que cette route existe dans votre backend
  }

  getPatientById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.API_URL}/patients/${id}`);
  }
}
