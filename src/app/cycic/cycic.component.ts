import { Component,OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cycic',
  templateUrl: './cycic.component.html',
  styleUrls: ['./cycic.component.css']
})
export class CycicComponent implements OnInit {
 
  kablTip = 0;
  kablDuzina : number = 5;
  kablbrBoja = 0;
  kablboje = 0; 
  kablNaziv ='';
  
  constructor(private ref: ChangeDetectorRef) { 
    // ref.detectChanges();
    
  }

  ngOnInit(): void {
    this.ref.detectChanges();
    
  //  let kablTip : number;
  //  let kablDuzina : number;
  //  let kablbrBoja : number;
  //  let kablboje : number; 

    // kablTip = 0;
    // let pokusaj =  Kabl;
    //  pokusaj = {
    //   tip : 1,
    //   duzina : 5,
    //   brBoja : 1,
    //   boje : 1
    // }
  }

  /**
   * selectCable
   */
  guitarCable(){
    this.kablTip =1;
    this.checkCable();
  }
  micCable(){
    this.kablTip =2;
    this.checkCable();
  }
  rcaCable(){
    this.kablTip =3;
    this.checkCable();
  }

  checkCable(){
    if(this.kablTip == 1){
      this.kablNaziv = 'Gitaru';
    }if (this.kablTip == 2) {
      this.kablNaziv = 'Mikrofon';
    }if (this.kablTip == 3) {
      this.kablNaziv = 'RCA na 6,35mm';
    }
  }
  
}
