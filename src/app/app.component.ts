import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gestionrendezvous';
 
    isAuthenticated: boolean = false;
  
    constructor(public authService: AuthService) {}
  
    ngOnInit(): void {
      this.authService.isAuthenticated$.subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
    }
  }
