import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public loading = false;
  users: any;
  userForm: FormGroup;
  showAddForm = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required],
      mdp_confirmation: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.loading = true;
    this.userService.getAllUsers().subscribe(
      data => {
        this.loading = false;
        this.users = data;
      },
      error => {
        this.loading = false;
        console.error('Error fetching users', error);
      }
    );
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      alert('Formulaire invalide !!!');
    } else {
      this.loading = true;
      this.authService.register(this.userForm.value).subscribe(
        (res: any) => {
          if (res) {
            this.loading = false;
            alert('User ajouté avec succès.');
            this.userForm.reset();
            this.getAllUsers();
          }
        },
        (error: any) => {
          this.loading = false;
          alert('Erreur lors de l\'ajout.');
          console.log(error);
        }
      );
    }
  }

  updateUser(id:any){

  }

  deleteUser(id: any) {
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ? ')) {
      this.loading = true;
      this.userService.deleteUser(id).subscribe((res: any) => {
        if (res) {
          this.loading = false;
          alert('User supprimé avec succès.');
          this.getAllUsers();
        }
      }, (error: any) => {
        this.loading = false;
        console.log(error);
        alert('Erreur lors de la suppression de l\'utilisateur.');
      });
    }
  }
  prendreRendezVous(medecinId: number): void {
    // Rediriger vers la page de prise de rendez-vous avec l'ID du médecin
    this.router.navigate(['/rendezvous', medecinId]);
  }
}
