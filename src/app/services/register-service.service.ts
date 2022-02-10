import { User } from './../Models/User';
import { LoginModel } from './../Models/login-models';
import { RegisterModel } from './../Models/register-models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  baseUrl="http://localhost:32308/Account/";
  headers={
    headers:new HttpHeaders({
        'Content-Type':'application/json'
    }),
    withCredentials:true
  }

  constructor(private http:HttpClient) { }

  Register(reg:RegisterModel):Observable<RegisterModel>{
    return this.http.post<RegisterModel>(this.baseUrl+"Register",reg,this.headers).pipe();
  }
  Login(log:LoginModel):Observable<LoginModel>{
    return this.http.post<LoginModel>(this.baseUrl+"Login",log,this.headers).pipe();
  }
  GetAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+"GetAllUsers").pipe();
  }
  LogoutUsers(){
    return this.http.get(this.baseUrl+"Logout",{withCredentials:true}).pipe();
  }

}
