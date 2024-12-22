import { Component } from '@angular/core';
import { MedecinService } from '../services/medecin/medecin.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchQuery: string = '';
  medecins: any[] = [];

  constructor(private medecinService: MedecinService) {}

  search(): void {
    this.medecinService.searchMedecins(this.searchQuery).subscribe(
      (data) => {
        this.medecins = data;
      },
      (error) => {
        console.error('Erreur lors de la recherche', error);
      }
    );
  }

}
