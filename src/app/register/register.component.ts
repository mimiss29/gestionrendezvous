import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: [''], // Facultatif
      adresse: [''], // Facultatif
      sexe: [''], // Facultatif
      telephone: [''], // Facultatif
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(8)]],
      mdp_confirmation: ['', Validators.required],
      type: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(formGroup: AbstractControl): ValidationErrors | null {
    const mdpControl = formGroup.get('mdp');
    const confirmControl = formGroup.get('mdp_confirmation');

    if (mdpControl && confirmControl) {
      return mdpControl.value === confirmControl.value ? null : { mismatch: true };
    }

    return null;
  }

  register() {
    if (this.registerForm.valid) {
      this.loading = true;
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          this.loading = false;
          console.log('Registration successful', response);
          this.router.navigate(['/login']);
        },
        error => {
          this.loading = false;
          console.error('Registration failed', error);
        }
      );
    }
  }
}
