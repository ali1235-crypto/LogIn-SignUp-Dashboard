

import { transition, trigger } from '@angular/animations';
import { animate } from '@angular/animations';
import { state, style } from '@angular/animations';
export const anm=[trigger('animation',[
  transition(':enter',[style({
    opacity:0
  }),animate('500ms',style({
    opacity:1,transform:'translateY(65px)'
  })),animate('1000ms',style({
    opacity:1
  })),animate('500ms',style({
    opacity:0,transform:'translateY(0px)'
  }))])
])]
