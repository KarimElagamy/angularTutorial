import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivateChild {

  LoggedIn:boolean = false;
  constructor(private accountService:AccountService) { }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      this.accountService.isLoggedIn.subscribe(data => {
        this.LoggedIn = data;
      });

      if ((localStorage.getItem('token') != null) && (this.LoggedIn)){
        return true;
      }
      else {
        return false;
      };
  }
}
