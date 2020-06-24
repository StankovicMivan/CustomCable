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
    this.lang = sessionStorage.getItem('lang');
    // console.log(this.lang);
    // console.log(sessionStorage.getItem('orderID'));
    this.orderSize = parseInt(sessionStorage.getItem('orderID'));
  }

  lang = '';


  // path = '';
  setLangLink(event: any) {
    sessionStorage.setItem('lang', this.lang);
    console.log(this.lang);

    // this.router.navigate(['', this.lang]);

    location.reload();


  }
  setLangLinkClick() {
    sessionStorage.setItem('lang', this.lang);
    console.log(this.lang);

    location.reload();
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
    if (JSON.parse(sessionStorage.getItem('orders')) == null) {

    } else {
      this.orders = JSON.parse(sessionStorage.getItem('orders'));
    }
    this.orderIdString = this.orderSize;
    console.log(this.orders);
    // console.log(sessionStorage.getItem('orderID'));
    sessionStorage.setItem('orderID', this.orderIdString);
    // console.log(sessionStorage.getItem('orderID'));
    this.orderSize = this.orders.length;
    this.totalPrice = 0;
    if (sessionStorage.getItem('orders') != null) {
      this.orders = JSON.parse(sessionStorage.getItem('orders'));
      this.orders.forEach(i => {
        this.totalPrice += i.orderPrice;
      });
    }
  }
  tempOrders: OrderMod[] = [];
  counter = 0;
  remove(orderId: number) {
    this.orders.splice(orderId);
    this.orders.forEach(i => {
      if (i != null) {
        this.tempOrders[this.counter] = i;
        this.counter++;
      }
      
    });
    var orderidnumber = parseInt(sessionStorage.getItem('orderID'));
    orderidnumber =orderidnumber-1;
    sessionStorage.setItem('orderID',orderidnumber.toString());
    sessionStorage.setItem('orders', JSON.stringify(this.tempOrders));
    console.log(this.tempOrders)
    this.counter = 0;
  }
}
