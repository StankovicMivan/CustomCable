import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  lang = 'en';
  // path = '';
  setLangLink (event: any){
    // window.location.reload();
    this.router.navigate(['/' , this.lang]);
    // console.log(this.lang);
  }
  setLangLinkClick (){
    // window.location.reload();
    this.router.navigate(['/' , this.lang]);
    // console.log(this.lang);
  }
  contactLink(){
    this.router.navigate(['contact/' , this.lang]);
  }
  createLink(){
    this.router.navigate(['create/' , this.lang]);
  }
  aboutLink(){
    this.router.navigate(['about/' , this.lang]);
  }
  galleryLink(){
    this.router.navigate(['gallery/' , this.lang]);
  }
  homeLink(){
    this.router.navigate(['/' , this.lang]);
  }

}
