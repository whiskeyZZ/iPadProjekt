
import { Component, OnInit } from '@angular/core';
import { RoutesRecognized } from '@angular/router';


@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['../app/app.component.css']
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


