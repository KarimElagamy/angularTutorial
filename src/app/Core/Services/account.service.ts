import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from 'src/app/Shared/Models/Login';
import { Register } from 'src/app/Shared/Models/Register';
import { map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User, UserWAdmin } from 'src/app/Shared/Models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSubject = new BehaviorSubject<UserWAdmin>({} as UserWAdmin);
  public currentUser = this.currentUserSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  jwtHelper = new JwtHelperService();

  constructor(private http:HttpClient) { }

  Login(loginData:Login):Observable<boolean>{
    return this.http.post<boolean>("https://antrahrm.azure-api.net/authentication/api/Account/login", loginData).pipe(map((response: any) => {
      if (response) {
        localStorage.setItem('token', response.token);
        return true;
      }
      return false;
    }));
  }

  Logout(){
    localStorage.removeItem('token');
    this.currentUserSubject.next({} as UserWAdmin);
    this.isLoggedInSubject.next (false);
  }

  Register(registerData:Register):Observable<boolean>{
    return this.http.post<boolean>("https://antrahrm.azure-api.net/authentication/api/Account/register", registerData);
  }

  populateUserInfoFromToken(){
    var tokenValue = localStorage.getItem('token');

    if (tokenValue && !this.jwtHelper.isTokenExpired(tokenValue)){
      const decodedToken = this.jwtHelper.decodeToken(tokenValue);
      this.isLoggedInSubject.next(true);
       const newUser:UserWAdmin = {
        email: decodedToken.email,
        password: decodedToken.password,
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        isAdmin: true
       };
      this.currentUserSubject.next(newUser);
    }
  }

  ValidateJWTToken(){
    var tokenValue = localStorage.getItem('token');
    if (tokenValue != null && !this.jwtHelper.isTokenExpired(tokenValue)){
      const decodedToken = this.jwtHelper.decodeToken(tokenValue);
      this.isLoggedInSubject.next(true);
      this.currentUserSubject.next(decodedToken);
    };
  }
}
