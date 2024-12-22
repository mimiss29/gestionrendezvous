import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './listepatients.component.html',
  styleUrls: ['./listepatients.component.css']
})
export class PatientListComponent implements OnInit {
  patients: any[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.userService.getPatients().subscribe(
      data => this.patients = data,
      error => console.error('Erreur lors de la récupération des patients', error)
    );
  }

  voirDetails(patientId: number): void {
    this.router.navigate(['/home/patient-details', patientId]);
  }
}
