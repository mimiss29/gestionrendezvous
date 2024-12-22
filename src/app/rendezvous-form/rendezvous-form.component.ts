import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RendezvousService } from '../services/rv/rendezvous.service';

@Component({
  selector: 'app-rendezvous-form',
  templateUrl: './rendezvous-form.component.html',
  styleUrls: ['./rendezvous-form.component.css']
})
export class RendezvousFormComponent implements OnInit {
  rendezvousForm: FormGroup;

  constructor(private fb: FormBuilder, private rendezvousService: RendezvousService ) {
    this.rendezvousForm = this.fb.group({
      medecin_id: ['', Validators.required],
      patient_id: ['', Validators.required],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      lieu: ['', Validators.required],
      status: ['en_attente', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.rendezvousForm.valid) {
      this.rendezvousService.createRendezvous(this.rendezvousForm.value).subscribe(
        response => {
          console.log('Rendez-vous créé avec succès', response);
          this.rendezvousForm.reset();
        },
        error => {
          console.error('Erreur lors de la création du rendez-vous', error);
        }
      );
    }
  }
}
