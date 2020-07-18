import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PreventLogInAccess implements CanActivate {

  constructor(private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger;
      if (window.localStorage.getItem('token')) {
        this.router.navigate(['/list-user']);
        return false;
      } else {
      return true;
    }
  }
} 