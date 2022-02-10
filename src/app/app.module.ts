import { SignupComponent } from './signup/signup.component';
import { ControlComponent } from './control/control/control.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IndComponent } from './ind/ind.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

const routes=[
  {path:'',component:AppComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:ControlComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    IndComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [IndComponent]
})
export class AppModule { }
