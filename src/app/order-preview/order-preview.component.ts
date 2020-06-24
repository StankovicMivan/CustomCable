import { Component, OnInit } from '@angular/core';
import { OrderMod } from '../mailtemplates/orderMod';
import { Router, ActivatedRoute } from '@angular/router';

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


}
