import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lang: string = this.route.snapshot.params['lang'];
  
  constructor(private router: Router,private route: ActivatedRoute) { }
  ngOnInit(): void {
    // this.lang = 'en';
  }

  aboutLink(){
    this.router.navigate(['about/' , this.lang]);
  }
}
