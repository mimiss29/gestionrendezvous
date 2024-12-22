import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loading = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    mdp: new FormControl('', Validators.required)
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    if (!this.loginForm.valid) {
      alert('Veuillez remplir le formulaire correctement.');
    } else {
      this.loading = true;
      this.authService.login(this.loginForm.value).subscribe(
        {
          next: (res: any) => {
            this.loading = false;
            console.log('Login response:', res); // Ajoutez ce log
            if (res.status == 200) {
              this.authService.setToken(res.access_token);
              localStorage.setItem('userConnected', JSON.stringify(res.user));
              this.authService.initializeUserFromLocalStorage();
              this.redirectBasedOnRole(res.user.type); // Appel de la méthode de redirection
            } else {
              alert('Email ou mot de passe incorrect !');
            }
          },
          error: (error: any) => {
            console.error('Login error:', error); // Ajoutez ce log
            alert('Erreur serveur ....');
          }
        }
      );
    }
  }

  private redirectBasedOnRole(type: string) {
    console.log('Redirecting based on type:', type); // Ajoutez ce log
    switch (type) {
      case 'medecin':
        console.log('Redirecting to medecin dashboard');
        this.router.navigate(['/medecin-dashboard']);
        break;
      case 'admin':
        console.log('Redirecting to home ');
        this.router.navigate(['home']);
        break;
      case 'patient':
        console.log('Redirecting to patient dashboard');
        this.router.navigate(['patient-dashboard']);
        break;
      default:
        console.log('Redirecting to login');
        this.router.navigate(['/login']);
        break;
    }
  }
  
}
