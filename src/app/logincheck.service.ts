import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogincheckService {

  constructor() { }
  
  login:boolean=false;

  setlogin(as)
  {
    this.login=as;
  }

}
