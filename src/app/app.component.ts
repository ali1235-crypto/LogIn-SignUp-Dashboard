import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './Models/login-models';
import { AuthService } from './services/auth.service';
import { RegisterServiceService } from './services/register-service.service';
import { Valid } from './Valid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetsaudi';
  check=false
  logModel=new LoginModel;
  v=new Valid;
password(){
  if(!this.check){
    return 'password'
  }
  else{
    return 'text'
  }
}
check1(){
  if(this.check){
    this.check=false
  }
  else{
    this.check=true
  }
}
  constructor(private service:RegisterServiceService,private router:Router,private auth:AuthService) {}

  Login(){
    this.InfoLoginModel()
    this.service.Login(this.logModel).subscribe(success=>{
      const rem=!!this.v.remeberme.value;
      this.auth.instStorage(rem,this.v.username.value);
      this.router.navigate(["dashboard"])
    },err=>{
      console.log(err)
    })
  }

  InfoLoginModel(){
    this.logModel.username=this.v.username.value;
    this.logModel.password=this.v.password.value;
    this.logModel.remeberme=this.v.remeberme.value;
  }

}
