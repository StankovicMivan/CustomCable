import { Component, OnInit } from '@angular/core';
import { OrderMod } from '../mailtemplates/orderMod';
import { Router, ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { OrderMail } from '../mailtemplates/order.model';
import { CycicService } from '../cycic/cycic.service';
import { HttpClient } from '@angular/common/http';
import { Discount } from '../mailtemplates/discount.model';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent implements OnInit {
  id: number;
  discountCode: string
  yourName: string;
  yourEmail: string;
  yourPhone: string;
  yourAddress: string;
  city: string;
  zipCode: number;
  discounts: Discount[] = []
  private orderService = new CycicService(this.http);
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  lang;
  totalPrice = 0;
  disPrice = 0;
  disFlag = false;
  orders: OrderMod[] = [];

  ngOnInit(): void {

    this.lang = sessionStorage.getItem('lang');
    this.orders = JSON.parse(sessionStorage.getItem('orders'));
    this.priceCal();
    this.orderService.discountOrder();
    this.discounts = JSON.parse(sessionStorage.getItem('discounts'));

  }
  priceCal() {
    this.totalPrice = 0;
    if (sessionStorage.getItem('orders') != null) {
      this.orders.forEach(i => {
        this.totalPrice += i.orderPrice;
      });
    }
    if (this.totalPrice > 10000 && this.disFlag != true) {
      var temp = this.totalPrice;
      var temp2 = this.totalPrice;
      this.disValue = 10;
      this.disPrice = temp - (temp2 * (this.disValue / 100));
      
      this.priceFlag = true;
      this.setLineThrough();
      this.disFlag = true;
    }
  }

  priceFlag = false;
  disFlagInsert = false;
  disValue ;
  priceDiscounted() {
    if (this.disFlagInsert == false) {
      this.discounts = JSON.parse(sessionStorage.getItem('discounts'));
      this.disFlagInsert = true;

    }

    this.disFlag = false;
    this.unsetLineThrought();
    this.priceCal();
    this.discounts.forEach(discount => {
      if (discount.name.toLowerCase() == this.discountCode.toLowerCase()) {
        var temp = this.totalPrice;
        var temp2 = this.totalPrice;
        this.disValue = discount.value
        this.disPrice = temp - (temp2 * ( this.disValue/ 100));
        this.priceFlag = true;
        this.setLineThrough();
        this.disFlag = true;
      }
    });
    if (!this.priceFlag) {
      this.disFlag = false;
      this.unsetLineThrought();
      this.priceCal();
    }

  }
  setLineThrough() {
    var doc = document.getElementById('price');

    doc.setAttribute("style", "text-decoration: line-through;  font-size: 15px; color: Black; position: relative;top: 40px; left: -40px;");
    
   
    // document.getElementById('priceDis').setAttribute("style", "text-decoration: unset;");
    
  }
  unsetLineThrought() {
    var doc = document.getElementById('price');

    doc.setAttribute("style", "text-decoration: unset; font-size:2rem; color: red;");

  }
  answ: string = '';
  check = function colorCheck(params: number) {
    if (params == 1) {
      if (this.lang == 'sr') {
        this.answ = 'Bela';
      } else {
        this.answ = 'White';
      }
    }
    if (params == 2) {
      if (this.lang == 'sr') {
        this.answ = 'Crvena';
      } else {
        this.answ = 'Red';
      }
    }
    if (params == 3) {
      if (this.lang == 'sr') {
        this.answ = 'Plava';
      } else {
        this.answ = 'Blue';
      }
    }
    if (params == 4) {
      if (this.lang == 'sr') {
        this.answ = 'Žuta';
      } else {
        this.answ = 'Yellow';
      }
    }
    if (params == 5) {
      if (this.lang == 'sr') {
        this.answ = 'Zelena';
      } else {
        this.answ = 'Green';
      }
    }
    if (params == 6) {
      if (this.lang == 'sr') {
        this.answ = 'Crna';
      } else {
        this.answ = 'Black';
      }
    }

    return this.answ;
  }
  answ2;
  checkType = function checkType(params: number) {
    if (params == 1) {
      if (this.lang == 'sr') {
        this.answ2 = 'Gitara';
      } else {
        this.answ2 = 'Guitar';
      }
    }
    if (params == 2) {
      if (this.lang == 'sr') {
        this.answ2 = 'Mikrofon';
      } else {
        this.answ2 = 'Mic';
      }
    }
    if (params == 3) {
      if (this.lang == 'sr') {
        this.answ2 = 'RCA';
      } else {
        this.answ2 = 'RCA';
      }
    }




    return this.answ2;
  }
  sendOrder() {
    if (this.validation()) {
      let order = new OrderMail(
        this.id = 0,
        this.yourName,
        this.yourEmail,
        this.yourPhone,
        this.yourAddress,
        this.city,
        this.zipCode,
        this.orders);


      this.orderService.createOrder(order);

    }



  }
  tempOrders: OrderMod[] = [];
  counter = 0;
  remove(orderId: number) {
    // this.orders.splice(orderId);
    console.log(orderId);
    this.orders.forEach(i => {

      if (i.orderId != orderId) {
        console.log('print array before remove' + i);
        this.tempOrders[this.counter] = i;
        this.counter++;
      } else {

      }

    });
    var orderidnumber = parseInt(sessionStorage.getItem('orderID'));
    orderidnumber = orderidnumber - 1;
    console.log(orderidnumber);
    sessionStorage.setItem('orderID', orderidnumber.toString());
    sessionStorage.setItem('orders', JSON.stringify(this.tempOrders));
    console.log(this.tempOrders);
    this.counter = 0;
    // this.reloadPage();
  }
  reloadPage() {
    location.reload();
  }
  validation = function analyzeValitate() {
    if (this.yourName == null) {
      if (this.lang == 'sr') {
        alert("Morate popuniti sva polja.");
      } else {
        alert("Please enter all information.")
      }

      return false;
    }
    if (this.yourEmail == null) {
      if (this.lang == 'sr') {
        alert("Morate popuniti sva polja.");
      } else {
        alert("Please enter all information.")
      }
      return false;
    } if (this.yourPhone == null) {
      if (this.lang == 'sr') {
        alert("Morate popuniti sva polja.");
      } else {
        alert("Please enter all information.")
      }
      return false;
    } if (this.yourAddress == null) {
      if (this.lang == 'sr') {
        alert("Morate popuniti sva polja.");
      } else {
        alert("Please enter all information.")
      }
      return false;
    } if (this.city == null) {
      if (this.lang == 'sr') {
        alert("Morate popuniti sva polja.");
      } else {
        alert("Please enter all information.")
      }
      return false;
    } if (this.zipCode == null) {
      if (this.lang == 'sr') {
        alert("Morate popuniti sva polja.");
      } else {
        alert("Please enter all information.")
      }
      return false;
    }
    return true;
  }

}
