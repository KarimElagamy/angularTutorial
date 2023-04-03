import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  LoggedIn:boolean = false;
  isAdmin:boolean = false;

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.isLoggedIn.subscribe(data => {
      this.LoggedIn = data;
    });

    this.accountService.currentUser.subscribe(data => {
      this.isAdmin = data.isAdmin;
    });
  }

  Logout(){
    this.accountService.Logout();
  }
}
