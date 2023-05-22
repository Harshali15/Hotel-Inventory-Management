import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  loginValid: boolean = true;

  constructor(private route: Router, private loginService: LoginService) { }

  login() {
    if(this.loginService.login(this.email,this.password)){
      this.route.navigate(['/rooms'])
      this.loginValid = true;
      //this.route.navigateByUrl('/rooms/add')
     // alert("Login Successful")
    }
       else{
      this.loginValid = false;
      //alert("Login Failed. Please check your username and password")
    }  }
}
