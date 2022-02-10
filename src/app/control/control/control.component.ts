import { AuthService } from './../../services/auth.service';
import { User } from './../../Models/User';
import { RegisterServiceService } from './../../services/register-service.service';
import { FormControl } from '@angular/forms';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Valid } from 'src/app/Valid';
import { anm } from 'src/app/animation';




@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  animations:[anm]
})
export class ControlComponent implements OnInit{
  ss=false;
  v:Valid=new Valid
  minDate:Date;
  maxDate:Date;
name="Welcome Ibrahim Abdo Ali"
arr:User[] | undefined;
l: number[]=[]
formDate="select date"
  constructor(private roter:Router,private service:RegisterServiceService,private auth:AuthService) {
    this.maxDate=new Date();
    this.minDate=new Date();
    this.minDate.setFullYear(this.minDate.getFullYear()-80);
    service.GetAllUsers().subscribe(succ=>{
      console.log(succ)
      this.arr=succ
      this.l=Array(5).fill(succ.length).map((x,i)=>i);
      console.log(this.l)
    },err=>{
      console.log(err)
    });

  }
  ngOnInit(): void {
    setTimeout(() => {
      if(this.auth.CheckStorage()){
        localStorage.clear();
        this.Logout();
      }
    }, 2000);
  }

  organize(i:number){
    if(i==1 || i==2 || i==3 || i==4){
      return 2
    }
    if(i==5){
      return 3
    }
    else{
      return 1
    }
  }
  organize2(i:number, c:string){
    if(i!=5){
      return c
    }
    else{
      return '<button>select</button>'
    }
  }

  createGridTitle(user:User,index:number){
    if(index==0){
      return user.firstName
    }
    else if(index==1){
      return user.department
    }
    else{
      return "bla bla"
    }
  }

  Logout(){
    this.service.LogoutUsers().subscribe(succ=>{
      localStorage.clear();

      this.roter.navigate(['']);
    })
  }
}
