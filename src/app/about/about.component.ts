import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  lang;
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang');
    if(this.lang =='sr'){

      
      document.getElementById('choiceOne').innerHTML = 'Tip kabla';
      document.getElementById('choiceTwo').innerHTML = 'Dužina';
      document.getElementById('choiceThree').innerHTML = 'Boja i šablon';
      document.getElementById('choiceFour').innerHTML = 'Boja zaštite konektora';

    }
  }

  create(){
    this.router.navigate(['create/' ]);
  }
  toContact(){
    this.router.navigate(['contact/'])
  }
}
