import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AccountService } from '../Core/Services/account.service';
import { Login } from '../Shared/Models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData:Login = {
    email: "",
    password: ""
  };

  constructor(private accountService:AccountService) { }
  ngOnInit(): void {
    
  }

  Login(loginForm:NgForm){
    this.loginData.email = loginForm.controls['email'].value;
    this.loginData.password = loginForm.controls['password'].value;
  }
}
