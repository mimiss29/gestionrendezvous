import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { MedecinService } from '../services/medecin/medecin.service';

@Component({
  selector: 'app-choisir-medecin',
  templateUrl: './choisir-medecin.component.html',
  styleUrls: ['./choisir-medecin.component.css']
})
export class ChoisirMedecinComponent    implements OnInit {
  medecins: any[] = [];
  selectedMedecinId: number = 0; // Initialisation avec une valeur par défaut

  constructor(private router: Router, private medecinService: MedecinService) { }

  ngOnInit(): void {
    this.loadMedecins();
  }

  loadMedecins(): void {
    this.medecinService.getMedecins().subscribe(
      data => {
        this.medecins = data;
      },
      error => {
        console.error('Erreur lors du chargement des médecins', error);
      }
    );
  }

  onSelectMedecin(event: any): void {
    this.selectedMedecinId = event.target.value;
  }

  goToConfirmerRv(): void {
    if (this.selectedMedecinId) {
      this.router.navigate(['/patient-dashboard/confirmer-rv'], { queryParams: { medecinId: this.selectedMedecinId } });
    } else {
      alert('Veuillez sélectionner un médecin.');
    }
  }
}