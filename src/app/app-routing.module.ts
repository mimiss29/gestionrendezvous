import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { SpecialitesComponent } from './specialites/specialites.component';
import { SallesDeConsultationComponent } from './salles-de-consultation/salles-de-consultation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ListeMedecinsSpecialiteComponent } from './listemedecinspecialite/listemedecinspecialite.component';
import { MedecinDashboardComponent } from './medecin-dashboard/medecin-dashboard.component';
import { AuthGuard } from './auth.guard';
import { ProfilComponent } from './profil/profil.component';
import { HorairesComponent } from './horaires/horaires.component';
import { PatientListComponent } from './listepatients/listepatients.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChangerMotDePasseComponent } from './changer-mot-de-passe/changer-mot-de-passe.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { RendezvousDetailsComponent } from './rendezvous-details/rendezvous-details.component';
import { PatientRvComponent } from './patient-rv/patient-rv.component';
import { RendezvousFormComponent } from './rendezvous-form/rendezvous-form.component';
import { PrendreRvComponent } from './prendre-rv/prendre-rv.component';
import { ChoisirMedecinComponent } from './choisir-medecin/choisir-medecin.component';
import { ConfirmerRvComponent } from './confirmer-rv/confirmer-rv.component';
import { SlotComponent } from './slot/slot.component';


const routes: Routes = [
  // { path: 'a-propos', component: AboutComponent },
  // { path: 'prendre-rendez-vous', component: RendezvousComponent },
  { path: 'choisir-medecin', component: ChoisirMedecinComponent },
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  
  // { path: 'specialites', component: SpecialitesComponent },
  // { path: 'register', component: RegisterComponent },
  {
    path: 'home',component:HomeComponent,
    children: [
      { path: 'rendezvous', component: RendezvousComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'patients', component: PatientListComponent },
      { path: 'medecins', component: ListeMedecinsSpecialiteComponent }, 
      { path: 'rendezvous/:medecinId', component: RendezvousComponent },
      { path: 'specialites', component: SpecialitesComponent },
      { path: 'salles-de-consultation', component: SallesDeConsultationComponent },
      { path: 'patient-details/:id', component: PatientDetailsComponent },
      
    ],
  },

  { path: 'medecin-dashboard', component: MedecinDashboardComponent,
   children: [
    { path: 'rendezvous', component: RendezvousComponent },
    { path: 'patients', component: PatientListComponent },
    { path: 'tableau-de-bord', component: TableauBordComponent },
    { path: 'patient-details/:id', component: PatientDetailsComponent },
    { path: 'profil', component: ProfilComponent },
    { path: 'changer-mot-de-passe', component: ChangerMotDePasseComponent },
    { path: 'profil', component: MedecinDashboardComponent },
    { path: 'horaires', component: MedecinDashboardComponent },
    { path: 'changer-mot-de-passe', component: MedecinDashboardComponent },
    { path: '', redirectTo: 'tableau-de-bord', pathMatch: 'full' }
  ]},

  { path: 'patient-dashboard', component: PatientDashboardComponent,
    children: [
      { path: 'medecins', component: ListeMedecinsSpecialiteComponent },
      { path: 'slots/medecin/:id', component: SlotComponent },
      { path: 'slots/medecin/:id', component: SlotComponent },
      
     
    
]},
  
{ path: 'slots/medecin/:id', component: SlotComponent },
 { path: 'choisir-medecin', component: ChoisirMedecinComponent },
 { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // Rediriger vers /login par défaut
  { path: '**', component: WelcomeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
