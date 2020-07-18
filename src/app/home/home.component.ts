import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lang;
 
  constructor(private router: Router,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.lang = localStorage.getItem('lang');
   
  }

  aboutLink(){
    this.router.navigate(['about/' ]);
  }
}
