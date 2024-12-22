// src/app/specialite-card/specialite-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specialite-card',
  templateUrl: './specialite-card.component.html',
  styleUrls: ['./specialite-card.component.css']
})
export class SpecialiteCardComponent {
  @Input() specialite: any;
}
