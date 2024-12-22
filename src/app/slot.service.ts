import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  private apiUrl = 'environment.API_URL; '; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }

  // Récupérer les créneaux d'un médecin spécifique
  getSlotsByMedecin(medecinId: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/medecin/${medecinId}`);
  }

  // Vérifier la disponibilité d'un créneau
  checkAvailability(slotId: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/${slotId}/availability`);
  }

  // Réserver un créneau
  // Réserver un créneau
  reserveSlot(slotId: number, patientId: number): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}/slots/reserve`, { slot_id: slotId, patient_id: patientId });
  }
}
 

  


  
