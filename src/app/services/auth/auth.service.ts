import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() authenticationChange = new EventEmitter<void>();
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private access_token: string | null = null;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser;
  type: any; // Utilisez `type` ici
  userConnected: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
    this.initializeUserFromLocalStorage();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public setToken(access_token: string): void {
    this.access_token = access_token;
    sessionStorage.setItem('access_token', access_token);
  }

  public getToken(): string | null {
    if (!this.access_token) {
      this.access_token = sessionStorage.getItem('access_token');
    }
    return this.access_token;
  }

  getHeaders(): HttpHeaders {
    const access_token = this.getToken();
    if (access_token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${access_token}`
      });
    }
    return new HttpHeaders();
  }

  login(data: any) {
    return this.httpClient.post(`${environment.API_URL}/login`, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
  
  register(data: any) {
    return this.httpClient.post(`${environment.API_URL}/register`, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  logout() {
    sessionStorage.removeItem('access_token');
    sessionStorage.clear();
    localStorage.removeItem('userConnected');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  public authenticateUser(success: boolean): boolean {
    if (success) {
      this.isAuthenticatedSubject.next(true);
      this.authenticationChange.emit();
      return true;
    } else {
      this.isAuthenticatedSubject.next(false);
      return false;
    }
  }

  public initializeUserFromLocalStorage(): void {
    const token = this.getToken();
    if (token) {
      const userConnectedJson = localStorage.getItem('userConnected');
      if (userConnectedJson) {
        this.userConnected = JSON.parse(userConnectedJson);
        this.type = this.userConnected.type; // Utilisez `type` ici
        this.isAuthenticatedSubject.next(true);
        this.authenticationChange.emit();
      }
    }
  }

  getType(): string { // Utilisez `type` ici
    return this.currentUserValue?.type;
  }

  
}
