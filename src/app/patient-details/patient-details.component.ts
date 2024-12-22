import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    const patientId = this.route.snapshot.paramMap.get('id');
    if (patientId) {
      this.userService.getPatientById(patientId).subscribe(
        data => this.patient = data,
        error => console.error('Erreur lors de la récupération des détails du patient', error)
      );
    } else {
      console.error('ID du patient non trouvé');
    }
  }
}

