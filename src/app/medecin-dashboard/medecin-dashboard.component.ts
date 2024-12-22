import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MedecinService } from '../services/medecin/medecin.service';
import { Router } from '@angular/router';
import { MedecinDashboardService } from '../services/medecin/medecin-dashboard.service';
import { RendezvousService } from '../services/rv/rendezvous.service';
import { DisponibilitesService } from '../services/disponibilite.service';

@Component({
  selector: 'app-medecin-dashboard',
  templateUrl: './medecin-dashboard.component.html',
  styleUrls: ['./medecin-dashboard.component.css']
})
export class MedecinDashboardComponent implements OnInit {
  rendezvous: any[] = [];
  patients: any[] = [];
  type: any; // Assurez-vous que cette propriété est définie
  medecin: any; // Ajoutez une propriété pour les informations du médecin
  medecinId: number = 21;
  disponibilites: any = {};
  rendezVousDuJour: number = 0;
  nombreDePatients: number = 0;
  rendezVousFuturs: number = 0;

  constructor(
    private rendezvousService: RendezvousService,
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient,
    private medecinService: MedecinService,
    private router: Router,
    private medecinDashboardService: MedecinDashboardService,
    private disponibilitesService: DisponibilitesService
  ) {
    // Initialisez la variable type avec une valeur par défaut ou récupérez-la depuis un service ou une autre source
    this.type = 'medecin'; // ou une autre valeur en fonction de votre logique
  }

  ngOnInit(): void {
    this.authService.initializeUserFromLocalStorage();
    const userConnected = this.authService.userConnected;
    this.type = userConnected.type;
    this.medecinId = userConnected.id; // Assurez-vous que l'ID du médecin est disponible dans userConnected

    this.getRendezvous();
    this.getPatients();
    this.getMedecinProfile();
    this.getMedecinDisponibilites();
  } 
  getRendezvous(): void {
    this.rendezvousService.getRendezvous().subscribe(
      data => this.rendezvous = data,
      error => console.error('Erreur lors de la récupération des rendez-vous', error)
    );
  }

  getPatients(): void {
    this.userService.getPatients().subscribe(
      data => this.patients = data,
      error => console.error('Erreur lors de la récupération des patients', error)
    );
  }

  getMedecinProfile(): void {
    this.medecinDashboardService.getMedecinProfile().subscribe(
      data => this.medecin = data,
      error => console.error('Erreur lors de la récupération du profil du médecin', error)
    );
  }

  confirmerRendezVous(id: string): void {
    this.rendezvousService.confirmerRendezVous(id).subscribe(
      response => {
        console.log('Rendez-vous confirmé avec succès', response);
        this.getRendezvous();
      },
      error => console.error('Erreur lors de la confirmation de rendez-vous', error)
    );
  }

  rejeterRendezVous(id: string): void {
    this.rendezvousService.rejeterRendezVous(id).subscribe(
      response => {
        console.log('Rendez-vous rejeté avec succès', response);
        this.getRendezvous();
      },
      error => console.error('Erreur lors du rejet de rendez-vous', error)
    );
  }

  mettreEnAttenteRendezVous(id: string): void {
    this.rendezvousService.mettreEnAttenteRendezVous(id).subscribe(
      response => {
        console.log('Rendez-vous mis en attente avec succès', response);
        this.getRendezvous();
      },
      error => console.error('Erreur lors de la mise en attente de rendez-vous', error)
    );
  }

  modifierProfil(): void {
    this.router.navigate(['/medecin-dashboard/profil']);
  }

  changerMotDePasse(): void {
    this.router.navigate(['/medecin-dashboard/changer-mot-de-passe']);
  }

  voirDetailsPatient(patientId: number): void {
    this.router.navigate(['/medecin-dashboard/patient-details', patientId]);
  }
  getMedecinDisponibilites(): void {
    this.disponibilitesService.getMedecinDisponibilites(this.medecinId).subscribe(
      (data: any) => {
        this.disponibilites = data.disponibilites;
       
      },
      error => {
        console.error('Erreur lors de la récupération des disponibilités', error);
      }
    );
  }
}
