import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  lang = '';
  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang');
  }

}
