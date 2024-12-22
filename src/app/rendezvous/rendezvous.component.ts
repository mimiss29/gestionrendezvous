import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RendezvousService } from '../services/rv/rendezvous.service';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent implements OnInit {
  rendezvousForm: FormGroup;
  medecins: any[] = [];
  patients: any[] = [];
  medecinId!: number;
  loading = false;
  disponibilites: any = {};
  disponibilitesKeys: string[] = [];
  rendezvousList: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private rendezvousService: RendezvousService
  ) {
    this.rendezvousForm = this.fb.group({
      medecin_id: ['', Validators.required],
      patient_id: ['', Validators.required],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      lieu: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.medecinId = +this.route.snapshot.paramMap.get('medecinId')!;
    if (this.medecinId !== null) {
      this.getDisponibilites();
      this.loadMedecins();
      this.loadPatients();
    }
    this.loadRendezvous();
  }

  getDisponibilites(): void {
    this.loading = true;
    this.userService.getMedecinDisponibilites(this.medecinId).subscribe(
      data => {
        this.loading = false;
        this.disponibilites = data.disponibilites;
        this.disponibilitesKeys = Object.keys(this.disponibilites);
      },
      error => {
        this.loading = false;
        console.error('Error fetching disponibilites', error);
      }
    );
  }

  loadMedecins(): void {
    this.rendezvousService.getMedecins().subscribe(data => {
      this.medecins = data;
    });
  }

  loadPatients(): void {
    this.rendezvousService.getPatients().subscribe(data => {
      this.patients = data;
    });
  }

  loadRendezvous(): void {
    this.rendezvousService.getAllRendezvous().subscribe(
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
      this.rendezvousService.addRendezvous(this.rendezvousForm.value).subscribe(
        response => {
          console.log('Rendez-vous enregistré avec succès', response);
          this.loadRendezvous(); // Rechargez la liste des rendez-vous après l'ajout
          this.rendezvousForm.reset();
        },
        error => {
          console.error('Erreur lors de l\'enregistrement du rendez-vous', error);
        }
      );
    }
  }

  // deleteRendezvous(id: number): void {
  //   this.rendezvousService.deleteRendezvous(id.toString()).subscribe(
  //     response => {
  //       this.loadRendezvous();
  //     },
  //     error => {
  //       console.error('Erreur lors de la suppression du rendez-vous', error);
  //     }
  //   );
  // }
  deleteRendezvous(id: any) {
    if (confirm('Voulez-vous vraiment supprimer ce rendez-vous ?')) {
      this.loading = true;
      this.rendezvousService.deleteRendezvous(id).subscribe(
        (res: any) => {
          this.loading = false;
          alert('Rendez-vous supprimé avec succès.');
          this.loadRendezvous(); // Rechargez la liste des rendez-vous après la suppression
        },
        (error: any) => {
          this.loading = false;
          console.error(error);
          alert('Erreur lors de la suppression du rendez-vous.');
        }
      );
    }
  }
  
  confirmRendezvous(id: string): void {
    this.rendezvousService.confirmRendezvous(Number(id)).subscribe(
      response => {
        this.loadRendezvous();
      },
      error => {
        console.error('Erreur lors de la confirmation du rendez-vous', error);
      }
    );
  }

  prendreRendezVous(creneau: any): void {
    this.rendezvousForm.patchValue({
      medecin_id: this.medecinId,
      date: creneau.date,
      heure: creneau.heure
    });
  }
 
}
