import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/Shared/Models/Login';
import { Register } from 'src/app/Shared/Models/Register';
import { map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  jwtHelper = new JwtHelperService();

  constructor(private http:HttpClient) { }

  Login(loginData:Login):Observable<boolean>{
    return this.http.post<boolean>("https://antrahrm.azure-api.net/api/Account/login", loginData).pipe(map((response: any) => {
      if (response) {
        localStorage.setItem('token', response.token);
        return true;
      }
      return false;
    }));
  }

  Register(registerData:Register){

  }

  populateUserInfoFromToken(){
    var tokenValue = localStorage.getItem('token');

    if (tokenValue && !this.jwtHelper.isTokenExpired(tokenValue)){
      const decodedToken = this.jwtHelper.decodeToken(tokenValue);
    }
  }
}
