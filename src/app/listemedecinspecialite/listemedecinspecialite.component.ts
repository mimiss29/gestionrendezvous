// src/app/listemedecinspecialite/listemedecinspecialite.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SlotService } from '../slot.service';
import { MedecinService } from '../services/medecin/medecin.service';


@Component({
  selector: 'app-listemedecinspecialite',
  templateUrl: './listemedecinspecialite.component.html',
  styleUrls: ['./listemedecinspecialite.component.css']
})
export class ListeMedecinsSpecialiteComponent implements OnInit {
  public loading = false;
  medecins: any[] = [];
  medecinId!: number; 
 

  constructor(
    private router: Router,
    private medecinService: MedecinService  // Utilisation du service Medecin
  ) {}

  ngOnInit(): void {
    this.getAllMedecins();  // Appel pour récupérer les médecins
  }

  getAllMedecins(): void {
    this.loading = true;
    this.medecinService.getMedecins().subscribe(  // Utilisation correcte du service Medecin
      data => {
        this.loading = false;
        this.medecins = data;
      },
      error => {
        this.loading = false;
        console.error('Error fetching medecins', error);
      }
    );
  }

 
  viewSlots(medecinId: number): void {
    this.router.navigate([`/slots/medecin/${medecinId}`]);
  }
}

