import { Component, OnInit } from '@angular/core';
import { SpecialitesService } from '../services/specialitte/specialite.service';

@Component({
  selector: 'app-specialites',
  templateUrl: './specialites.component.html',
  styleUrls: ['./specialites.component.css']
})
export class SpecialitesComponent  implements OnInit {
 specialites: any[] = [];
  filteredSpecialites: any[] = [];
  searchQuery: string = '';

  constructor(private specialiteService: SpecialitesService) {}

  ngOnInit(): void {
    this.specialiteService.getSpecialites().subscribe(data => {
      this.specialites = data;
      this.filteredSpecialites = data;
    });
  }

  onSearch(): void {
    if (this.searchQuery) {
      this.specialiteService.searchSpecialites(this.searchQuery).subscribe(data => {
        this.filteredSpecialites = data;
      });
    } else {
      this.filteredSpecialites = this.specialites;
    }
  }

  resetFilter(): void {
    this.searchQuery = '';
    this.filteredSpecialites = this.specialites;
  }

}
