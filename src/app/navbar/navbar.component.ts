import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.lang = document.getElementById('mainNav').getAttribute('lang');
  }

  lang = '';
 

  // path = '';
  setLangLink (event: any){

    
    document.getElementById('mainNav').setAttribute('lang', this.lang);
    // this.router.navigate(['/' , document.getElementById('mainNav').getAttribute('lang')]);
    if(document.getElementById('mainNav').getAttribute('lang') != this.lang){
      this.router.navigate(['/' , document.getElementById('mainNav').getAttribute('lang')]);
    
      location.reload();
    }
 
    // this.router.navigate(['/' , document.getElementById('mainNav').getAttribute('lang')]);
    
  }
  setLangLinkClick (){
    document.getElementById('mainNav').setAttribute('lang', this.lang);
    // console.log(this.lang);
      if(document.getElementById('mainNav').getAttribute('lang') != this.lang){
        this.router.navigate(['/' , document.getElementById('mainNav').getAttribute('lang')]);
    
        location.reload();
    }
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
