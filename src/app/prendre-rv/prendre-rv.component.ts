import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RendezvousService } from '../services/rv/rendezvous.service';
import { UserService } from '../services/user/user.service';
import { MedecinService } from '../services/medecin/medecin.service';

@Component({
  selector: 'app-prendre-rv',
  templateUrl: './prendre-rv.component.html',
  styleUrls: ['./prendre-rv.component.css']
})
export class PrendreRvComponent  implements OnInit {
    rendezvousForm!: FormGroup; // Utilisation de l'opérateur de non-null assertion
    medecins: any[] = [];
    rendezvousList: any[] = [];
  
    constructor(
      private fb: FormBuilder,
      private rendezvousService: RendezvousService,
      private MedecinService: MedecinService,
      private router: Router
    ) {
      this.rendezvousForm = this.fb.group({
        medecin_id: ['', Validators.required],
        date: ['', Validators.required],
        heure: ['', Validators.required],
        lieu: ['', Validators.required],
      });
    }
  
    ngOnInit(): void {
        this.loadMedecins();
      this.loadRendezvous();
    }
  
    loadMedecins(): void {
        this.rendezvousService.getMedecins().subscribe(data => {
          this.medecins = data;
        });
      }
  
    loadRendezvous(): void {
      this.rendezvousService.getRendezvous().subscribe(
        data => {
          this.rendezvousList = data;
        },
        error => {
          console.error('Erreur lors du chargement des rendez-vous', error);
        }
      );
    }
  
    onSubmit(): void {
      if (this.rendezvousForm.valid) {
        this.rendezvousService.createRendezvous(this.rendezvousForm.value).subscribe(
          response => {
            console.log('Rendez-vous créé avec succès', response);
            this.rendezvousForm.reset();
            this.loadRendezvous();
          },
          error => {
            console.error('Erreur lors de la création du rendez-vous', error);
          }
        );
      }
    }
  
    deleteRendezvous(id: string): void {
      this.rendezvousService.deleteRendezvous(id).subscribe(
        response => {
          console.log('Rendez-vous supprimé avec succès', response);
          this.loadRendezvous();
        },
        error => {
          console.error('Erreur lors de la suppression du rendez-vous', error);
        }
      );
    }
  
    confirmRendezvous(id: number): void {
      this.rendezvousService.confirmRendezvous(id).subscribe(
        response => {
          console.log('Rendez-vous confirmé avec succès', response);
          this.loadRendezvous();
        },
        error => {
          console.error('Erreur lors de la confirmation du rendez-vous', error);
        }
      );
    }
  }