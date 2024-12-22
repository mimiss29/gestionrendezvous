import { Component, OnInit } from '@angular/core';
import { RendezvousService } from '../services/rv/rendezvous.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-rv',
  templateUrl: './patient-rv.component.html',
  styleUrls: ['./patient-rv.component.css']
})
export class PatientRvComponent implements OnInit {
  rendezvous: any[] = [];
  patientId: number = 0;

  constructor(private rendezvousService: RendezvousService, private router: Router) { }

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
