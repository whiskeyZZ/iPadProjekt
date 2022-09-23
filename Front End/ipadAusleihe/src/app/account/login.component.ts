
import { Component, OnInit } from '@angular/core';
import { RoutesRecognized } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent {
  user:string;
  password:string;

  constructor()
  {
    this.user = "",
    this.password = ""
  }

  ngOnInit(): void {

  }

  loginUser(): void {
    if(this.user == "test" && this.password == "test")
    {


    }
  }

}


