import { RegisterServiceService } from './../services/register-service.service';
import { Valid } from './../Valid';
import { RegisterModel } from './../Models/register-models';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  v:Valid=new Valid
  reg=new RegisterModel;
  constructor(private service:RegisterServiceService) {
    this.maxDate=new Date();
    this.minDate=new Date();
    this.minDate.setFullYear(this.minDate.getFullYear()-80);
  }

  ngOnInit(): void {

  }
  Register(){

      this.InfoRegisterModel();
      this.service.Register(this.reg).subscribe(succes=>{
        alert("Registration Complete")
      },err =>{
        console.log(err)
      })


  }
  InfoRegisterModel() {
    this.reg.firstname=this.v.firstname.value;
    this.reg.lastname=this.v.lastname.value;
    this.reg.middlename=this.v.middlename.value;
    this.reg.email=this.v.email.value;
    this.reg.date=this.v.date.value;
    this.reg.dep=this.v.departement.value;
    this.reg.username=this.v.username.value;
    this.reg.usertype=this.v.usertype.value;
    this.reg.phone=this.v.phone.value;
    this.reg.gender=this.v.gender.value;
    this.reg.password=this.v.password.value;
  }
}
