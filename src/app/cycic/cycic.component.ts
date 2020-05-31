import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { OrderMail } from '../mailtemplates/order.model';
import { CycicService } from './cycic.service';
// const sgMail = require('@sendgrid/mail');
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-cycic',
  templateUrl: './cycic.component.html',
  styleUrls: ['./cycic.component.css']
})
export class CycicComponent implements OnInit {
  lang: string = this.route.snapshot.params['lang'];

  kablTip = 0;
  kablDuzina: number = 1;
  cableColorNumber: number = 0;
  kablboje = 0;
  kablNaziv = '';
  yourName: string;
  yourEmail: string;
  yourPhone: string;
  yourAddress: string;
  city: string;
  zipCode: number;

  constructor(private ref: ChangeDetectorRef, private router: Router, private route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.ref.detectChanges();
    //Script for manual translate
    if (this.lang == 'sr') {
      //first tab
      document.getElementById('spanOne').innerText = '1. korak: Izaberite namenu';
      document.getElementById('guitar').innerHTML = 'Gitaru';
      document.getElementById('mic').innerHTML = 'Mikrofon';
      document.getElementById('rca').innerHTML = 'RCA na 6,35mm';
      //2. tab
      document.getElementById('spanTwo').innerText = '2. korak: Izaberite zeljenu duzinu';
      //3.tab
      document.getElementById('spanThree').innerText = '3. korak: Izaberite u koliko boja zelis kabl';
      document.getElementById('colorNumberLabel').innerText = 'U koliko boja zelite izradu kabla?';
      document.getElementById('cableColorOne').innerText = 'Jednoj';
      document.getElementById('cableColorTwo').innerText = 'Dve';
      //4. tab
      document.getElementById('spanFour').innerText = '4. korak: Izaberite boju u odnosu na prethodni izbor';
      document.getElementById('spanFive').innerText = '5. korak: Izaberite boju zastite oko konektora';
      document.getElementById('spanFinal').innerText = 'Poslednji korak: Potvrdi kreirano';


    }


  }
  sendOrder() {
    let order = new OrderMail(
      this.yourName,
      this.yourEmail,
      this.yourPhone,
      this.yourAddress,
      this.city,
      this.zipCode,
      this.kablTip,
      this.cableLenght,
      this.cableColorNumber,
      this.cablePattern,
      this.singleColor,
      this.primaryColor,
      this.secondaryColor,
      this.cableProtectionColor);
    // console.log(this.message);
    console.log(this.lang);
    let orderService = new CycicService(this.http);
    orderService.createOrder(order);

  }

  /**
   * selectCable
   */


  guitarCable() {
    this.kablTip = 1;
    this.checkCable();
  }
  micCable() {
    this.kablTip = 2;
    this.checkCable();
  }
  rcaCable() {
    this.kablTip = 3;
    this.checkCable();
  }

  checkCable() {
    if (this.kablTip == 1) {
      this.kablNaziv = 'Gitaru';
    } if (this.kablTip == 2) {
      this.kablNaziv = 'Mikrofon';
    } if (this.kablTip == 3) {
      this.kablNaziv = 'RCA na 6,35mm';
    }
  }
  duzinaKabla: string = '1 m';
  cableLenght: number = 0;

  proveraDuzine() {
    if (this.kablDuzina == 1) {
      this.cableLenght = 1;
      this.duzinaKabla = '1 m';
    } if (this.kablDuzina == 2) {
      this.cableLenght = 1.5;
      this.duzinaKabla = '1,5 m';
    } if (this.kablDuzina == 3) {
      this.cableLenght = 2;
      this.duzinaKabla = '2 m';
    } if (this.kablDuzina == 4) {
      this.cableLenght = 2.5;
      this.duzinaKabla = '2,5 m';
    } if (this.kablDuzina == 5) {
      this.cableLenght = 3;
      this.duzinaKabla = '3 m';
    } if (this.kablDuzina == 6) {
      this.cableLenght = 3.5;
      this.duzinaKabla = '3,5 m';
    } if (this.kablDuzina == 7) {
      this.cableLenght = 5;
      this.duzinaKabla = '5 m';
    } if (this.kablDuzina == 8) {
      this.cableLenght = 6;
      this.duzinaKabla = '6 m';
    } if (this.kablDuzina == 9) {
      this.cableLenght = 10;
      this.duzinaKabla = '10 m';
    }
  }

  cablePattern = 0;
  kablBojaJacka = 0;

  /*
   1 = crvena
   2 = zelena
   3 = plava
   4 = bela
   5 = zlatna
   6 = siva
   7 = zuta
 */
  cableProtectionColor = 0;
  boje: string = '';
  //provera broja boja
  color1 = false;
  color2 = false;
  color3 = false;
  color4 = false;
  color5 = false;
  color6 = false;
  counter = 0;
  c1() {
    if (this.color1 == false) {
      this.counter++;
      this.color1 = true;
      document.getElementById("defaultCheck1").setAttribute('checked', '');
      this.proveraBoje();
    } else {
      this.color1 = false;
      this.counter--;
      document.getElementById("defaultCheck1").removeAttribute('checked');
      this.removeDisabled();
    }
  }
  c2() {
    if (this.color2 == false) {
      this.color2 = true;
      this.counter++;
      document.getElementById("defaultCheck2").setAttribute('checked', '');
      this.proveraBoje();
    } else {
      this.color2 = false;
      this.counter--;
      document.getElementById("defaultCheck2").removeAttribute('checked');
      this.removeDisabled();
    }
  }
  c3() {
    if (this.color3 == false) {
      this.color3 = true;
      this.counter++;
      document.getElementById("defaultCheck3").setAttribute('checked', '');
      this.proveraBoje();
    } else {
      this.color3 = false;
      this.counter--;
      document.getElementById("defaultCheck3").removeAttribute('checked');
      this.removeDisabled();
    }
  }
  c4() {
    if (this.color4 == false) {
      this.color4 = true;
      this.counter++;
      document.getElementById("defaultCheck4").setAttribute('checked', '');
      this.proveraBoje();
    } else {
      this.color4 = false;
      this.counter--;
      document.getElementById("defaultCheck4").removeAttribute('checked');
      this.removeDisabled();
    }
  }
  c5() {
    if (this.color5 == false) {
      this.color5 = true;
      this.counter++;
      document.getElementById("defaultCheck5").setAttribute('checked', '');
      this.proveraBoje();
    } else {
      this.color5 = false;
      this.counter--;
      document.getElementById("defaultCheck5").removeAttribute('checked');
      this.removeDisabled();
    }
  }
  c6() {
    if (this.color6 == false) {
      this.color6 = true;
      this.counter++;
      document.getElementById("defaultCheck6").setAttribute('checked', '');
      this.proveraBoje();
    } else {
      this.color6 = false;
      this.counter--;
      document.getElementById("defaultCheck6").removeAttribute('checked');
      this.removeDisabled();
    }
  }
  // c7() {
  //   if (this.boja7 == false) {
  //     this.boja7 = true;
  //     this.counter++;
  //     document.getElementById("defaultCheck7").setAttribute('checked', '');
  //     this.proveraBoje();
  //   } else {
  //     this.boja7 = false;
  //     this.counter--;
  //     document.getElementById("defaultCheck7").removeAttribute('checked');
  //     this.removeDisabled();
  //   }
  // }
  flag = false;
  proveraBoje() {
    if (this.counter == this.cableColorNumber) {
      this.flag = true;
      if (this.color1 == false) {
        document.getElementById("defaultCheck1").setAttribute('disabled', '');
      } if (this.color2 == false) {
        document.getElementById("defaultCheck2").setAttribute('disabled', '');
      } if (this.color3 == false) {
        document.getElementById("defaultCheck3").setAttribute('disabled', '');
      } if (this.color5 == false) {
        document.getElementById("defaultCheck4").setAttribute('disabled', '');
      } if (this.color5 == false) {
        document.getElementById("defaultCheck5").setAttribute('disabled', '');
      } if (this.color6 == false) {
        document.getElementById("defaultCheck6").setAttribute('disabled', '');
      }
    }


  }
  removeDisabled() {
    if (this.counter < this.cableColorNumber) {
      document.getElementById("defaultCheck1").removeAttribute('disabled');
      document.getElementById("defaultCheck2").removeAttribute('disabled');
      document.getElementById("defaultCheck3").removeAttribute('disabled');
      document.getElementById("defaultCheck4").removeAttribute('disabled');
      document.getElementById("defaultCheck5").removeAttribute('disabled');
      document.getElementById("defaultCheck6").removeAttribute('disabled');

    }
  }
  primaryColor = 0;
  secondaryColor = 0;
  srcPath = "";
  srcPathBase = '../../assets/img/create/';
  patternLeftOrRight = "";
  patternColorFolder = "";
  patternColorFileName = "";
  patterColorSubFolder = "";
  previousPath = "";


  previewPattern() {
    if (this.cablePattern == 1 || this.cablePattern == 3 || this.cablePattern == 5) {
      this.patternLeftOrRight = "right";
    }
    if (this.cablePattern == 2 || this.cablePattern == 4 || this.cablePattern == 6) {
      this.patternLeftOrRight = "left";
    }
    if (this.primaryColor == 1) {
      this.patternColorFolder = "white";
    }
    if (this.primaryColor == 2) {
      this.patternColorFolder = "red";
    }
    if (this.primaryColor == 3) {
      this.patternColorFolder = "blue";
    }
    if (this.primaryColor == 4) {
      this.patternColorFolder = "gold";
    }
    if (this.primaryColor == 5) {
      this.patternColorFolder = "yellow";
    }
    if (this.primaryColor == 6) {
      this.patternColorFolder = "green";
    }
    if (this.primaryColor == 7) {
      this.patternColorFolder = "gray";
    }
    if (this.secondaryColor == 1) {
      this.patterColorSubFolder = "white";
    }
    if (this.secondaryColor == 2) {
      this.patterColorSubFolder = "red";
    }
    if (this.secondaryColor == 3) {
      this.patterColorSubFolder = "blue";
    }
    if (this.secondaryColor == 4) {
      this.patterColorSubFolder = "gold";
    }
    if (this.secondaryColor == 5) {
      this.patterColorSubFolder = "yellow";
    }
    if (this.secondaryColor == 6) {
      this.patterColorSubFolder = "green";
    }
    if (this.secondaryColor == 7) {
      this.patterColorSubFolder = "gray";
    }

    if (this.cablePattern == 1 || this.cablePattern == 2) {
      this.patternColorFileName = "1";
    }
    if (this.cablePattern == 3 || this.cablePattern == 4) {
      this.patternColorFileName = "2";
    }
    if (this.cablePattern == 5 || this.cablePattern == 6) {
      this.patternColorFileName = "3";
    }


    if (this.primaryColor != 0 && this.secondaryColor != 0) {
      if (this.secondaryColor == this.primaryColor) {
        document.getElementById("previewPattern").setAttribute('src', this.previousPath);
        document.getElementById("previewPatternTwo").setAttribute('src', this.previousPath);


      } else {
        this.srcPath = this.srcPathBase + this.patternLeftOrRight + "/" + this.patternColorFolder + "/" + this.patterColorSubFolder + "/" + this.patternColorFileName + '.svg';
        this.previousPath = '';
        this.previousPath += this.srcPath;
        document.getElementById("previewPattern").setAttribute('src', this.srcPath);
        document.getElementById("previewPatternTwo").setAttribute('src', this.srcPath);
      }

    }



  }


  srcPathBaseForSingleColor = '../../assets/img/create/full';
  singleColor = 0;
  srcFullPathForSingleColor = "";
  /*
  1 -> White
  2 -> Red
  3 -> Blue
  4 -> Gold 
  5 -> Yellow
  6 -> Green
  7 -> Gray
  */
  previewPatternSingleColor() {
    this.srcFullPathForSingleColor = this.srcPathBaseForSingleColor + "/" + this.singleColor + '.svg';
    if (this.singleColor != 0) {
      document.getElementById("previewPatternSingleColor").setAttribute('src', this.srcFullPathForSingleColor);
      document.getElementById("previewPatternTwo").setAttribute('src', this.srcFullPathForSingleColor);
    }
  }



}
