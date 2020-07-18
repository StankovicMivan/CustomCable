import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OrderMod } from '../mailtemplates/orderMod';
import { stringify } from 'querystring';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang');
    // console.log(this.lang);
    // console.log(sessionStorage.getItem('orderID'));
    this.orderSize = parseInt(localStorage.getItem('orderID'));
  }

  lang = '';


  // path = '';
  setLangLink(event: any) {
    localStorage.setItem('lang', this.lang);
    console.log(this.lang);

    // this.router.navigate(['', this.lang]);

    this.reloadPage();


  }
  setLangLinkClick() {
    localStorage.setItem('lang', this.lang);
    console.log(this.lang);

    this.reloadPage();
    // this.router.navigate(['' , this.lang]);

  }
  contactLink() {
    this.router.navigate(['contact/']);
  }
  createLink() {
    this.router.navigate(['create/']);
  }
  aboutLink() {
    this.router.navigate(['about/']);
  }
  galleryLink() {
    this.router.navigate(['gallery/']);
  }
  homeLink() {
    this.router.navigate(['/']);
  }

  orders: OrderMod[] = [];
  orderSize = this.orders.length;
  totalPrice = 0;
  orderIdString;
  // orders = ;
  print() {
    if (JSON.parse(localStorage.getItem('orders')) == null) {

    } else {
      this.orders = JSON.parse(localStorage.getItem('orders'));
    }
    this.orderIdString = this.orderSize;
    console.log(this.orders);
    // console.log(sessionStorage.getItem('orderID'));
    localStorage.setItem('orderID', this.orderIdString);
    // console.log(sessionStorage.getItem('orderID'));
    this.orderSize = this.orders.length;
    this.totalPrice = 0;
    if (localStorage.getItem('orders') != null) {
      this.orders = JSON.parse(localStorage.getItem('orders'));
      this.orders.forEach(i => {
        this.totalPrice += i.orderPrice;
      });
    }
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
    var orderidnumber = parseInt(localStorage.getItem('orderID'));
    orderidnumber =orderidnumber-1;
    localStorage.setItem('orderID',orderidnumber.toString());
    localStorage.setItem('orders', JSON.stringify(this.tempOrders));
    console.log(this.tempOrders)
    this.counter = 0;
    this.reloadPage();
  }
  reloadPage(){
    location.reload();
  }
  goToOrderPreview(){
    this.router.navigate(['cart/']);
  }
}
