import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';
import { MedecinService } from '../services/medecin/medecin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userConnected:any;
  patients: any[] = [];
  type:any;
  medecinId: number | null = null;
  medecin: any;
  medecins: any[] = [];

  constructor(
    private authService: AuthService ,
    private userService: UserService,
    private medecinService: MedecinService
  ){}

  ngOnInit(): void {
    this.authService.initializeUserFromLocalStorage();
    this.userConnected = this.authService.userConnected;
    this.type = this.userConnected.type;
    this.medecinId = this.userConnected.id;
    console.log(this.userConnected);

    if (this.type === 'medecin') {
      this.getPatients();
      this.medecinId = 21;
    }
    
    
  }

  getPatients(): void {
    this.userService.getPatients().subscribe(
      data => this.patients = data,
      error => console.error('Erreur lors de la récupération des patients', error)
    );
  }

  getAllMedecins(): void {
    this.medecinService.getMedecins().subscribe(
      data => {
        this.medecins = data;
      },
      error => {
        console.error('Error fetching medecins', error);
      }
    );
  }
}
  

