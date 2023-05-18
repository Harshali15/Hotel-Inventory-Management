import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedin: boolean = false;

  isAdminLogin: boolean = false;

  constructor() { }

  login(email:string, password:string) {
    if(email=="admin@gmail.com" && password=="admin"){
        this.isLoggedin=true;
        this.isAdminLogin=true;
    }
    if(email=="user@gmail.com" && password=="user"){
      this.isLoggedin=true;
      this.isAdminLogin=false;
    }
    return this.isLoggedin;
  }
}
