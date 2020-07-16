import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderMod } from './mailtemplates/orderMod';
import { Discount } from './mailtemplates/discount.model';
import { CycicService } from './cycic/cycic.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomCable';
  // constructor(private router: Router) {
  //   let path = localStorage.getItem('path');
  //   if(path) {
  //     localStorage.removeItem('path');
  //     this.router.navigate([path]);
  //   }
  // }
  http: HttpClient;
  orderId ;
  orders: OrderMod[] = [];
  private orderService = new CycicService(this.http);
  // discounts : Discount[] = []

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(sessionStorage.getItem('lang') != 'en' && sessionStorage.getItem('lang') != 'sr' ){
      sessionStorage.setItem('lang', 'en');
    }else{
      // sessionStorage.setItem('lang', 'en');
    }
    if(sessionStorage.getItem('orderID') != '0' && sessionStorage.getItem('orderID') != null){

    }else {
      
      this.orderId = 0;
      sessionStorage.setItem('orderID', this.orderId);
      sessionStorage.setItem('orders', JSON.stringify(this.orders));
     
    }

    // this.orderService.discountOrder();
    // this.discounts = JSON.parse(sessionStorage.getItem('discounts'));
  }
}
