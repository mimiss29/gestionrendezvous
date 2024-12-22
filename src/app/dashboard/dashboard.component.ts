import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userConnected:any;

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.authService.initializeUserFromLocalStorage();
    this.userConnected = this.authService.userConnected;
    // console.log(this.userConnected);
  }

}
