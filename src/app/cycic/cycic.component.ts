import { Component,OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cycic',
  templateUrl: './cycic.component.html',
  styleUrls: ['./cycic.component.css']
})
export class CycicComponent implements OnInit {
 
  kablTip = 0;
  kablDuzina : number = 1;
  kablbrBoja  : number = 1;
  kablboje = 0; 
  kablNaziv ='';
  
  constructor(private ref: ChangeDetectorRef) { 
    // ref.detectChanges();
    
  }

  ngOnInit(): void {
    this.ref.detectChanges();
    
 
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
  duzinaKabla: string = '1 m';

  proveraDuzine(){
    if(this.kablDuzina == 1){
      this.duzinaKabla = '1 m';
    }if(this.kablDuzina == 2){
      this.duzinaKabla ='1,5 m';
    }if(this.kablDuzina == 3){
      this.duzinaKabla = '2 m';
    }if(this.kablDuzina == 4){
      this.duzinaKabla = '2,5 m';
    }if(this.kablDuzina == 5){
      this.duzinaKabla = '3 m';
    }if(this.kablDuzina == 6){
      this.duzinaKabla = '3,5 m';
    }if(this.kablDuzina == 7){
      this.duzinaKabla = '5 m';
    }if(this.kablDuzina == 8){
      this.duzinaKabla = '6 m';
    }if(this.kablDuzina == 9){
      this.duzinaKabla = '10 m';
    }
  }

  kablSara = 0;
  kablBojaJacka=0;

  /*
   1 = crvena
   2 = zelena
   3 = plava
   4 = bela
   5 = zlatna
   6 = siva
   7 = zuta
 */
  boje : string = '';
  //provera broja boja
  boja1 = false;
  boja2 = false;
  boja3 = false;
  boja4 = false;
  boja5 = false;
  boja6 = false;
  boja7 = false;
  counter = 0;
  c1(){
    if (this.boja1 ==false){
      this.counter++;
      this.boja1 =true;
      document.getElementById("defaultCheck1").setAttribute('checked','');
      this.proveraBoje();
      }else {
      this.boja1 =false;
      this.counter--;
      document.getElementById("defaultCheck1").removeAttribute('checked');
      this.removeDisabled();
    }
  }
  c2(){
    if (this.boja2 ==false){
      this.boja2 =true;
      this.counter++;
      document.getElementById("defaultCheck2").setAttribute('checked',''); 
      this.proveraBoje(); 
    }else{
      this.boja2 =false;
      this.counter--;
      document.getElementById("defaultCheck2").removeAttribute('checked');
      this.removeDisabled();
    }  
  }
  c3(){
    if (this.boja3 ==false){
      this.boja3 =true;
      this.counter++;
      document.getElementById("defaultCheck3").setAttribute('checked','');  
      this.proveraBoje();
    }else{
      this.boja3 =false;
      this.counter--;
      document.getElementById("defaultCheck3").removeAttribute('checked');
      this.removeDisabled();
    }  
  }
  c4(){
    if (this.boja4 ==false){
      this.boja4 =true;
      this.counter++;
      document.getElementById("defaultCheck4").setAttribute('checked','');  
      this.proveraBoje();
    }else{
      this.boja4 =false;
      this.counter--;
      document.getElementById("defaultCheck4").removeAttribute('checked');
      this.removeDisabled();
    }  
  }
  c5(){
    if (this.boja5 ==false){
      this.boja5 =true;
      this.counter++;
      document.getElementById("defaultCheck5").setAttribute('checked',''); 
      this.proveraBoje();
    }else{
      this.boja5 =false;
      this.counter--;
      document.getElementById("defaultCheck5").removeAttribute('checked');
      this.removeDisabled();
    }  
  }
  c6(){
    if (this.boja6 ==false){
      this.boja6 =true;
      this.counter++;
      document.getElementById("defaultCheck6").setAttribute('checked',''); 
      this.proveraBoje();
    }else{
      this.boja6 =false;
      this.counter--;
      document.getElementById("defaultCheck6").removeAttribute('checked');
      this.removeDisabled();
    }  
  }
  c7(){
    if (this.boja7 ==false){
      this.boja7 =true;
      this.counter++;
      document.getElementById("defaultCheck7").setAttribute('checked','');  
      this.proveraBoje();
    }else{
      this.boja7 =false;
      this.counter--;
      document.getElementById("defaultCheck7").removeAttribute('checked');
      this.removeDisabled();
    }  
  }
  flag= false;
  proveraBoje(){
    if(this.counter ==this.kablbrBoja){
      this.flag =true;
      if(this.boja1 ==false){
        document.getElementById("defaultCheck1").setAttribute('disabled',''); 
      }if(this.boja2 ==false){   
        document.getElementById("defaultCheck2").setAttribute('disabled',''); 
      }if(this.boja3 ==false){
        document.getElementById("defaultCheck3").setAttribute('disabled',''); 
      }if(this.boja4 ==false){
        document.getElementById("defaultCheck4").setAttribute('disabled',''); 
      }if(this.boja5 ==false){
        document.getElementById("defaultCheck5").setAttribute('disabled',''); 
      }if(this.boja6 ==false){
        document.getElementById("defaultCheck6").setAttribute('disabled',''); 
      }if(this.boja7  ==false){
        document.getElementById("defaultCheck7").setAttribute('disabled','');  
      }
    }
    

  }
  removeDisabled(){
    if(this.counter <this.kablbrBoja){
      document.getElementById("defaultCheck1").removeAttribute('disabled');
      document.getElementById("defaultCheck2").removeAttribute('disabled');
      document.getElementById("defaultCheck3").removeAttribute('disabled');
      document.getElementById("defaultCheck4").removeAttribute('disabled');
      document.getElementById("defaultCheck5").removeAttribute('disabled');
      document.getElementById("defaultCheck6").removeAttribute('disabled');
      document.getElementById("defaultCheck7").removeAttribute('disabled');

    }
  }
}
