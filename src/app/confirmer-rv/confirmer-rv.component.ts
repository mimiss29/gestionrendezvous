import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezvousService } from '../services/rv/rendezvous.service';

@Component({
  selector: 'app-confirmer-rv',
  templateUrl: './confirmer-rv.component.html',
  styleUrls: ['./confirmer-rv.component.css']
})
export class ConfirmerRvComponent implements OnInit {
  rendezvousForm!: FormGroup;
  medecinId!: number;
  patientId: number = 1; // Remplacez par l'ID du patient connecté

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private rendezvousService: RendezvousService
  ) { }

  ngOnInit(): void {
    this.rendezvousForm = this.fb.group({
      medecin_id: ['', Validators.required],
      patient_id: ['', Validators.required],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      lieu: ['', Validators.required],
      status: ['en_attente', Validators.required],
    });

    this.route.queryParams.subscribe(params => {
      this.medecinId = params['medecinId'];
      if (this.rendezvousForm) {
        this.rendezvousForm.get('medecin_id')?.setValue(this.medecinId);
        this.rendezvousForm.get('patient_id')?.setValue(this.patientId);
      }
    });
  }

  onSubmit(): void {
    if (this.rendezvousForm.valid) {
      this.rendezvousService.createRendezvous(this.rendezvousForm.value).subscribe(
        response => {
          console.log('Rendez-vous créé avec succès', response);
          this.rendezvousForm.reset();
          this.router.navigate(['/patient-dashboard']);
        },
        error => {
          console.error('Erreur lors de la création du rendez-vous', error);
        }
      );
    }
  }
}