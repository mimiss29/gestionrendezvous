import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class DisponibilitesService {
  private apiUrl = 'http://localhost:8000/api'; // Remplacez par votre URL API

  constructor(private http: HttpClient) { }

  getMedecinDisponibilites(medecinId: number): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/users/${medecinId}/disponibilites`);
  }

  prendreRendezVous(disponibiliteId: number): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}/prendreRendezVous`, { disponibiliteId });
  }

  annulerRendezVous(disponibiliteId: number): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}/annulerRendezVous`, { disponibiliteId });
  }
}
