import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lang: string = 'en';
 
  constructor(private router: Router,private route: ActivatedRoute) { }
  ngOnInit(): void {
    if(this.route.snapshot.params['lang'] =='sr' || this.route.snapshot.params['lang'] == 'en'){
      this.lang = this.route.snapshot.params['lang'];
  
    }
   
  }

  aboutLink(){
    this.router.navigate(['about/' , this.lang]);
  }
}
