import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  lang: string = this.route.snapshot.params['lang'];
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.lang =='sr'){

      
      document.getElementById('choiceOne').innerHTML = '1. izbor';
      document.getElementById('choiceTwo').innerHTML = '2. izbor';
      document.getElementById('choiceThree').innerHTML = '3. izbor';
      document.getElementById('choiceFour').innerHTML = '4. izbor';

    }
  }

  create(){
    this.router.navigate(['create/' , this.lang]);
  }
}
