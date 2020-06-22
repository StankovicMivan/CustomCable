import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OrderMod } from '../mailtemplates/orderMod';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang');
    console.log(this.lang);
  }

  lang = '';


  // path = '';
  setLangLink(event: any) {
    localStorage.setItem('lang', this.lang);
    console.log(this.lang);

    // this.router.navigate(['', this.lang]);

    location.reload();


  }
  setLangLinkClick() {
    localStorage.setItem('lang', this.lang);
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

  orders = JSON.parse(localStorage.getItem('orders'));
  print() {
    this.orders = JSON.parse(localStorage.getItem('orders'));
    console.log(this.orders.length);
  }
}
