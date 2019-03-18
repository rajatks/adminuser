import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { Observable } from 'rxjs';
import 'rxjs/rx';
import { Register } from './register/register';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url:string="http://localhost:3000/users/";
  constructor(private http:Http) { }
  postuser(register:Register)
  {
    return this.http.post(this.url,register)
    .map((response:any)=>response)
  }
  putuser(register:Register,id)
  {
    return this.http.put(this.url+id,register)
    .map((response:any)=>response)
  }
  
  
  getUser(id):Observable<Response>
  {
     return this.http.get(this.url+id)
     .map((response:Response)=>response)
  }
  deleteUser(id):Observable<Response>
  {
     return this.http.delete(this.url+id)
     .map((response:Response)=>response)
  }
  getallUser():Observable<Response>
  {
     return this.http.get(this.url)
     .map((response:Response)=>response.json())
  }
}
