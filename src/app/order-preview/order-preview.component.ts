import { Component, OnInit } from '@angular/core';
import { OrderMod } from '../mailtemplates/orderMod';
import { Router, ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { OrderMail } from '../mailtemplates/order.model';
import { CycicService } from '../cycic/cycic.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent implements OnInit {
  yourName: string;
  yourEmail: string;
  yourPhone: string;
  yourAddress: string;
  city: string;
  zipCode: number;
  
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  lang ;
  totalPrice = 0;
  orders : OrderMod[] =[];
  ngOnInit(): void {
    this.lang = sessionStorage.getItem('lang');
    this.orders = JSON.parse(sessionStorage.getItem('orders'));
    this.totalPrice = 0;
    if (sessionStorage.getItem('orders') != null) {
      this.orders.forEach(i => {
        this.totalPrice += i.orderPrice;
      });
    }
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
  answ2;
  checkType = function checkType(params:number) {
    if(params ==1){
      if(this.lang == 'sr'){
        this.answ2 = 'Gitara';
      }else{
        this.answ2 = 'Guitar';
      }
    }
    if(params ==2){
      if(this.lang == 'sr'){
        this.answ2 = 'Mikrofon';
      }else{
        this.answ2 = 'Mic';
      }
    }
    if(params ==3){
      if(this.lang == 'sr'){
        this.answ2 = 'RCA';
      }else{
        this.answ2 = 'RCA';
      }
    }
    
    
    
   
    return this.answ2;
  }
  sendOrder() {
    if(this.validation()){
      let order = new OrderMail(
        this.yourName,
        this.yourEmail,
        this.yourPhone,
        this.yourAddress,
        this.city,
        this.zipCode,
        this.orders);
      console.log(this.lang);
      let orderService = new CycicService(this.http);
      orderService.createOrder(order);
    }

    // let order = new OrderMail(
    //   this.yourName,
    //   this.yourEmail,
    //   this.yourPhone,
    //   this.yourAddress,
    //   this.city,
    //   this.zipCode,
    //   this.orders);
    // console.log(this.lang);
    // let orderService = new CycicService(this.http);
    // orderService.createOrder(order);

  }
  tempOrders: OrderMod[] = [];
  counter = 0;
  remove(orderId: number) {
    // this.orders.splice(orderId);
    this.orders.forEach(i => {
      console.log('print array before remove' + i);
      if (i.orderId != orderId) {
        this.tempOrders[this.counter] = i;
        this.counter++;
      }else {

      }
      
    });
    var orderidnumber = parseInt(sessionStorage.getItem('orderID'));
    orderidnumber =orderidnumber-1;
    sessionStorage.setItem('orderID',orderidnumber.toString());
    sessionStorage.setItem('orders', JSON.stringify(this.tempOrders));
    console.log(this.tempOrders)
    this.counter = 0;
    this.reloadPage();
  }
  reloadPage(){
    location.reload();
  }
  validation = function analyzeValitate(){
    if(this.yourName ==null){
      if(this.lang == 'sr'){
        alert("Morate popuniti sva polja.");
      }else {
        alert("Please enter all information.")
      }
      
      return false;
    }
    if(this.yourEmail ==null){
      if(this.lang == 'sr'){
        alert("Morate popuniti sva polja.");
      }else {
        alert("Please enter all information.")
      }
      return false;
    }if(this.yourPhone ==null){
      if(this.lang == 'sr'){
        alert("Morate popuniti sva polja.");
      }else {
        alert("Please enter all information.")
      }
      return false;
    }if(this.yourAddress ==null){
      if(this.lang == 'sr'){
        alert("Morate popuniti sva polja.");
      }else {
        alert("Please enter all information.")
      }
      return false;
    }if(this.city ==null){
      if(this.lang == 'sr'){
        alert("Morate popuniti sva polja.");
      }else {
        alert("Please enter all information.")
      }
      return false;
    }if(this.zipCode ==null){
      if(this.lang == 'sr'){
        alert("Morate popuniti sva polja.");
      }else {
        alert("Please enter all information.")
      }
      return false;
    }
    return true;
  }

}