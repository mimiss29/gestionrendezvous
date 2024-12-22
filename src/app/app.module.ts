import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { SpecialitesComponent } from './specialites/specialites.component';
import { SallesDeConsultationComponent } from './salles-de-consultation/salles-de-consultation.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SpecialiteCardComponent } from './specialite-card/specialite-card.component';

// Ajout des modules manquants
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ListeMedecinsSpecialiteComponent } from './listemedecinspecialite/listemedecinspecialite.component';
import { MedecinDashboardComponent } from './medecin-dashboard/medecin-dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { HorairesComponent } from './horaires/horaires.component';
import { ChangerMotDePasseComponent } from './changer-mot-de-passe/changer-mot-de-passe.component';
import { UserService } from './services/user/user.service';
import { PatientListComponent } from './listepatients/listepatients.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { DisponibilitesService } from './services/disponibilite.service';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { RendezvousDetailsComponent } from './rendezvous-details/rendezvous-details.component';
import { PatientRvComponent } from './patient-rv/patient-rv.component';
import { RendezvousFormComponent } from './rendezvous-form/rendezvous-form.component';
import { ChoisirMedecinComponent } from './choisir-medecin/choisir-medecin.component';
import { ConfirmerRvComponent } from './confirmer-rv/confirmer-rv.component';
import { PrendreRvComponent } from './prendre-rv/prendre-rv.component';
import { SlotComponent } from './slot/slot.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    RendezvousComponent,
    SpecialitesComponent,
    SallesDeConsultationComponent,
    SearchBarComponent,
    DashboardComponent,
    AboutComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    SpecialiteCardComponent,
    RegisterComponent,
    ListeMedecinsSpecialiteComponent,
    MedecinDashboardComponent,
    ProfilComponent,
    HorairesComponent,
    ChangerMotDePasseComponent,
    PatientListComponent,
    PatientDetailsComponent,
    WelcomeComponent,
    TableauBordComponent,
    PatientDashboardComponent,
    RendezvousDetailsComponent,
    PatientRvComponent,
    RendezvousFormComponent,
    ChoisirMedecinComponent,
    ConfirmerRvComponent,
    PrendreRvComponent,
    SlotComponent,
    

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Correctement importé
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
   
   
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
