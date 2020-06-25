import { Component, OnInit } from '@angular/core';
import { OrderMod } from '../mailtemplates/orderMod';
import { Router, ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  lang ;
  orders : OrderMod[] =[];
  ngOnInit(): void {
    this.lang = sessionStorage.getItem('lang');
    this.orders = JSON.parse(sessionStorage.getItem('orders'));
  }
  answ : string ='';
  check = function colorCheck(params:number) {
    if(params ==1){
      if(this.lang == 'sr'){
        this.answ = 'Bela';
      }else{
        this.answ = 'White';
      }
    }
    if(params ==2){
      if(this.lang == 'sr'){
        this.answ = 'Crvena';
      }else{
        this.answ = 'Red';
      }
    }
    if(params ==3){
      if(this.lang == 'sr'){
        this.answ = 'Plava';
      }else{
        this.answ = 'Blue';
      }
    }
    if(params ==4){
      if(this.lang == 'sr'){
        this.answ = 'Žuta';
      }else{
        this.answ = 'Yellow';
      }
    }
    if(params ==5){
      if(this.lang == 'sr'){
        this.answ = 'Zelena';
      }else{
        this.answ = 'Green';
      }
    }
    if(params ==6){
      if(this.lang == 'sr'){
        this.answ = 'Crna';
      }else{
        this.answ = 'Black';
      }
    }

    return this.answ;
  }
}
