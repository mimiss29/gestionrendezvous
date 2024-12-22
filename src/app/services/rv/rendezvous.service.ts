import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})

  export class RendezvousService {
    constructor(
      private httpClient: HttpClient,
      private authService: AuthService
    ) { }
  
    getMedecins(): Observable<any[]> {
      return this.httpClient.get<any[]>(`${environment.API_URL}/medecins`);
    }
  
    getPatients(): Observable<any[]> {
      return this.httpClient.get<any[]>(`${environment.API_URL}/patients`);
    }

  getAllRendezvous(): Observable<any[]> {
    const headers = this.authService.getHeaders();
    return this.httpClient.get<any[]>(environment.API_URL + '/rendezvous', { headers });
  }

  addRendezvous(rendezvous: any): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.httpClient.post<any>(environment.API_URL + '/rendezvous', rendezvous, { headers });
  }

  // getRendezvousById(id: string): Observable<any> {
  //   const headers = this.authService.getHeaders();
  //   return this.httpClient.get<any>(environment.API_URL + '/rendezvous/' + id, { headers });
  // }
  getRendezvous(): Observable<any> {
    return this.httpClient.get(`environment.API_URL}`);
  }

  updateRendezvous(id: string, updatedRendezvous: any): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.httpClient.put<any>(environment.API_URL + '/rendezvous/' + id, updatedRendezvous, { headers });
  }

  deleteRendezvous(id: string): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.httpClient.delete(environment.API_URL + '/rendezvous/' + id, { headers });
  }
  confirmRendezvous(id: number): Observable<any> {
    return this.httpClient.put(`${environment.API_URL}/${id}/confirm`, {});
  }
  getRendezvousByMedecin(medecinId: number): Observable<any> {
    return this.httpClient.get(`${environment.API_URL}/rendezvous/medecin/${medecinId}`);
  }
  mettreEnAttenteRendezVous(id: string): Observable<any> {
    return this.httpClient.put(`${environment.API_URL}/rendezvous/${id}/mettre_en_attente`, {});
  }

  prendreRendezVous(rendezvous: any): Observable<any> {
    return this.httpClient.post(`${environment.API_URL}/rendezvous`, rendezvous);
  }
  
  rejeterRendezVous(id: string): Observable<any> {
    return this.httpClient.put(`${environment.API_URL}/rendezvous/rejeter/${id}`, {});
  }

  confirmerRendezVous(id: string): Observable<any> {
    return this.httpClient.put(`${environment.API_URL}/rendezvous/confirmer/${id}`, {});
  }
  getRendezvousById(id: string): Observable<any> {
    return this.httpClient.get(`${environment.API_URL}/rendezvous/${id}`);
  }

  createRendezvous(rendezvous: any): Observable<any> {
    return this.httpClient.post(`${environment.API_URL}/rendezvous`, rendezvous);
  }
  getRendezvousByPatient(patientId: number): Observable<any> {
    return this.httpClient.get(`${environment.API_URL}/patient-rv/${patientId}`);
  }
  
 
}
