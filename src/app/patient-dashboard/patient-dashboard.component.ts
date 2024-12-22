import { Component, OnInit } from '@angular/core';
import { RendezvousService } from '../services/rv/rendezvous.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  patientId: number = 1; // Remplacez par l'ID du patient connecté
  rendezvous: any[] = [];

  constructor(private rendezvousService: RendezvousService , private router: Router) { }

  ngOnInit(): void {
    this.getRendezvous();
  }

  getRendezvous(): void {
    this.rendezvousService.getRendezvousByPatient(this.patientId).subscribe(data => {
      this.rendezvous = data;
    });
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

  voirRendezVous(id: string): void {
    this.router.navigate(['/rendezvous-details', id]);
  }
}

