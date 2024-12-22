export interface Slot {
    id: number;
    medecin_id: number;
    date_debut: string;  // Le format est une chaîne, qui sera convertie en Date dans le template
    date_fin: string;    // Idem
    statut: string;
    est_reserve: boolean;
    patient_id: number | null;
    created_at: string;
    updated_at: string;
  }
  