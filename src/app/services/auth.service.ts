import { CryptService } from './crypy.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private crypt:CryptService) { }

  instStorage(rem:boolean,username:string){
    const date=new Date();
      if(rem){
        date.setDate(date.getDate()+10);
      }
      else{
        date.setMinutes(date.getMinutes()+1);
      }

      localStorage.setItem("username",this.crypt.Encrypt(username));
      localStorage.setItem("expire",this.crypt.Encrypt(date.toString()));

      this.GetRooleName(username).subscribe(succ=>{
        localStorage.setItem("roole",this.crypt.Encrypt(succ.toString()));
      },err=>{
        console.log(err);
      })

  }

  CheckStorage(){
    if(!!localStorage.getItem('username') && !!localStorage.getItem('expire') && !!localStorage.getItem('roole'))
    {
      const username=this.crypt.Decrypt(localStorage.getItem('username') as string);
      const expire=this.crypt.Decrypt(localStorage.getItem('expire') as string);
      const roole=this.crypt.Decrypt(localStorage.getItem('roole') as string);
      if(username!=null && expire!=null && roole!=null){

          this.ValidateUser(username,roole).subscribe(succ=>{
            console.log("User Authorized");

          },err=>{
            console.log(err);
          })
        if(this.IsExpireDate(expire)){
          return true
        }
      }

    }
    return false;
      }

  IsExpireDate(date:string){
    const dateNow=new Date();
    const dateExpire=new Date(Date.parse(date));
    if(dateExpire<dateNow){
      return true;
    }
    return false;
  }

  GetRooleName(username:string){
    return this.http.get("http://localhost:32308/Account/GetRooleName/"+username,{responseType:'text'}).pipe();
  }
  ValidateUser(username:string,roole:string){
    return this.http.get("http://localhost:32308/Account/CheckUserClaims/"+username+"&"+roole,{withCredentials:true}).pipe();
  }
}
