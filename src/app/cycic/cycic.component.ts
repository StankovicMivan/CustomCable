import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// const sgMail = require('@sendgrid/mail');

@Component({
  selector: 'app-cycic',
  templateUrl: './cycic.component.html',
  styleUrls: ['./cycic.component.css']
})
export class CycicComponent implements OnInit {

  kablTip = 0;
  kablDuzina: number = 1;
  kablbrBoja: number = 1;
  kablboje = 0;
  kablNaziv = '';

  constructor(private ref: ChangeDetectorRef) {
    // ref.detectChanges();

  }

  ngOnInit(): void {
    this.ref.detectChanges();
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // let msg = {
    //   to: 'ivanjoca@gmail.com',
    //   from: 'stankovicmivan@gmail.com',
    //   subject: 'Sending with Twilio SendGrid is Fun',
    //   text: 'and easy to do anywhere, even with Node.js',
    //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // };
    // sgMail.send(sendgrid);

    

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


  proveraDuzine() {
    if (this.kablDuzina == 1) {
      this.duzinaKabla = '1 m';
    } if (this.kablDuzina == 2) {
      this.duzinaKabla = '1,5 m';
    } if (this.kablDuzina == 3) {
      this.duzinaKabla = '2 m';
    } if (this.kablDuzina == 4) {
      this.duzinaKabla = '2,5 m';
    } if (this.kablDuzina == 5) {
      this.duzinaKabla = '3 m';
    } if (this.kablDuzina == 6) {
      this.duzinaKabla = '3,5 m';
    } if (this.kablDuzina == 7) {
      this.duzinaKabla = '5 m';
    } if (this.kablDuzina == 8) {
      this.duzinaKabla = '6 m';
    } if (this.kablDuzina == 9) {
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
  boje: string = '';
  //provera broja boja
  boja1 = false;
  boja2 = false;
  boja3 = false;
  boja4 = false;
  boja5 = false;
  boja6 = false;
  boja7 = false;
  counter = 0;
  c1() {
    if (this.boja1 == false) {
      this.counter++;
      this.boja1 = true;
      document.getElementById("defaultCheck1").setAttribute('checked', '');
      this.proveraBoje();
    } else {
      this.boja1 = false;
      this.counter--;
      document.getElementById("defaultCheck1").removeAttribute('checked');
      this.removeDisabled();
    }
  }
  c2() {
    if (this.boja2 == false) {
      this.boja2 = true;
      this.counter++;
      document.getElementById("defaultCheck2").setAttribute('checked', '');
      this.proveraBoje();
    } else {
      this.boja2 = false;
      this.counter--;
      document.getElementById("defaultCheck2").removeAttribute('checked');
      this.removeDisabled();
    }
  }
  c3() {
    if (this.boja3 == false) {
      this.boja3 = true;
      this.counter++;
      document.getElementById("defaultCheck3").setAttribute('checked', '');
      this.proveraBoje();
    } else {
      this.boja3 = false;
      this.counter--;
      document.getElementById("defaultCheck3").removeAttribute('checked');
      this.removeDisabled();
    }
  }
  c4() {
    if (this.boja4 == false) {
      this.boja4 = true;
      this.counter++;
      document.getElementById("defaultCheck4").setAttribute('checked', '');
      this.proveraBoje();
    } else {
      this.boja4 = false;
      this.counter--;
      document.getElementById("defaultCheck4").removeAttribute('checked');
      this.removeDisabled();
    }
  }
  c5() {
    if (this.boja5 == false) {
      this.boja5 = true;
      this.counter++;
      document.getElementById("defaultCheck5").setAttribute('checked', '');
      this.proveraBoje();
    } else {
      this.boja5 = false;
      this.counter--;
      document.getElementById("defaultCheck5").removeAttribute('checked');
      this.removeDisabled();
    }
  }
  c6() {
    if (this.boja6 == false) {
      this.boja6 = true;
      this.counter++;
      document.getElementById("defaultCheck6").setAttribute('checked', '');
      this.proveraBoje();
    } else {
      this.boja6 = false;
      this.counter--;
      document.getElementById("defaultCheck6").removeAttribute('checked');
      this.removeDisabled();
    }
  }
  c7() {
    if (this.boja7 == false) {
      this.boja7 = true;
      this.counter++;
      document.getElementById("defaultCheck7").setAttribute('checked', '');
      this.proveraBoje();
    } else {
      this.boja7 = false;
      this.counter--;
      document.getElementById("defaultCheck7").removeAttribute('checked');
      this.removeDisabled();
    }
  }
  flag = false;
  proveraBoje() {
    if (this.counter == this.kablbrBoja) {
      this.flag = true;
      if (this.boja1 == false) {
        document.getElementById("defaultCheck1").setAttribute('disabled', '');
      } if (this.boja2 == false) {
        document.getElementById("defaultCheck2").setAttribute('disabled', '');
      } if (this.boja3 == false) {
        document.getElementById("defaultCheck3").setAttribute('disabled', '');
      } if (this.boja4 == false) {
        document.getElementById("defaultCheck4").setAttribute('disabled', '');
      } if (this.boja5 == false) {
        document.getElementById("defaultCheck5").setAttribute('disabled', '');
      } if (this.boja6 == false) {
        document.getElementById("defaultCheck6").setAttribute('disabled', '');
      } if (this.boja7 == false) {
        document.getElementById("defaultCheck7").setAttribute('disabled', '');
      }
    }


  }
  removeDisabled() {
    if (this.counter < this.kablbrBoja) {
      document.getElementById("defaultCheck1").removeAttribute('disabled');
      document.getElementById("defaultCheck2").removeAttribute('disabled');
      document.getElementById("defaultCheck3").removeAttribute('disabled');
      document.getElementById("defaultCheck4").removeAttribute('disabled');
      document.getElementById("defaultCheck5").removeAttribute('disabled');
      document.getElementById("defaultCheck6").removeAttribute('disabled');
      document.getElementById("defaultCheck7").removeAttribute('disabled');

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

      } else {
        this.srcPath = this.srcPathBase + this.patternLeftOrRight + "/" + this.patternColorFolder + "/" + this.patterColorSubFolder + "/" + this.patternColorFileName + '.svg';
        this.previousPath = '';
        this.previousPath += this.srcPath;
        document.getElementById("previewPattern").setAttribute('src', this.srcPath);
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

    }
  }

}
