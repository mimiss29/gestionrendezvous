import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlotService } from '../slot.service';

interface Slot {
  id: number;
  medecin_id: number;
  date_debut: string;
  date_fin: string;
  statut: string;
  est_reserve: number; // 0 or 1
  patient_id: number | null;
  created_at: string;
  updated_at: string;
}

interface SlotsByDate {
  [date: string]: Slot[]; // Grouped by date
}

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {
  slotsByDate: SlotsByDate = {}; // Grouped slots by date
  medecinId!: number;
  patientId: number = 1; // Dynamically set this as per current patient

  constructor(private route: ActivatedRoute, private slotService: SlotService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.medecinId = +params.get('id')!;
      this.loadSlots();
    });
  }

  // Load slots for a specific medecin
  loadSlots(): void {
    this.slotService.getSlotsByMedecin(this.medecinId).subscribe(
      (data: SlotsByDate) => {
        this.slotsByDate = data; // Update slots based on response
      },
      error => {
        console.error('Error loading slots', error);
      }
    );
  }

  // Reserve a slot if available
  // Réserver un créneau si disponible
reserveSlot(slot: Slot): void {
  if (slot.statut === 'disponible' && slot.est_reserve === 0) {
    // Appel au service pour réserver le créneau
    this.slotService.reserveSlot(slot.id, this.patientId).subscribe(
      (response) => {
        // Si la réservation réussit, on met à jour le créneau localement
        slot.statut = 'réservé';  // Modifier le statut du créneau
        slot.est_reserve = 1;     // Marquer le créneau comme réservé
        slot.patient_id = this.patientId; // Associer le patient au créneau
        alert(response.message); // Afficher un message de succès
      },
      (error) => {
        // En cas d'erreur, afficher le message d'erreur
        alert(error.error.message || 'Une erreur est survenue.');
      }
    );
  } else {
    // Si le créneau est déjà réservé, afficher une alerte
    alert('Ce créneau est déjà réservé.');
  }
}

}
