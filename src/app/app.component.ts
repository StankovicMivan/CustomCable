import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(localStorage.getItem('lang') != 'en'){

    }else{
      localStorage.setItem('lang', 'en');
    }
   
  }
}
