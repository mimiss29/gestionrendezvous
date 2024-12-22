// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthService } from '../services/auth/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class TypeGuardService implements CanActivate {

//   constructor(public auth: AuthService, public router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot): boolean {
//     const expectedType = route.data['expectedType']; // Utiliser l'accès par index
//     const userType = this.auth.getType();

//     if (userType !== expectedType) {
//       this.router.navigate(['access-denied']);
//       return false;
//     }
//     return true;
//   }
// }
