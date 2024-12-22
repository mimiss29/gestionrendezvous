import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  appSetting: any = {}; // Initialisez appSetting comme un objet vide

  ngOnInit(): void {
    // Initialisez appSetting avec les données nécessaires
    this.appSetting = {
      phone1: '123-456-7890' // Exemple de données
    };
  }
}