import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { OrderMail } from '../mailtemplates/order.model';
import { CycicService } from './cycic.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { OrderMod } from '../mailtemplates/orderMod';
@Component({
  selector: 'app-cycic',
  templateUrl: './cycic.component.html',
  styleUrls: ['./cycic.component.css']
})
export class CycicComponent implements OnInit {
 
  cableType = 0;
  cableLenghtFinal: number = 1;
  cableColorNumber: number = 0;
  kablboje = 0;
  kablNaziv = '';
  yourName: string;
  yourEmail: string;
  yourPhone: string;
  yourAddress: string;
  city: string;
  zipCode: number;
  orderNumber: string;
  orderData: OrderMod;
  orderPreview: OrderMod;
  orderPrice: number;

  constructor(private ref: ChangeDetectorRef, private router: Router, private route: ActivatedRoute, private http: HttpClient) {

  }
  lang;
  ngOnInit(): void {
    this.ref.detectChanges();
    this.lang = sessionStorage.getItem('lang');
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
    this.orderNumber = "0" + this.cableType + this.cableLenght + this.cableColorNumber + this.cablePattern + this.singleColor + this.primaryColor + this.secondaryColor + this.cableProtectionColor;


  }

  sendOrder() {


    let order = new OrderMail(
      this.yourName,
      this.yourEmail,
      this.yourPhone,
      this.yourAddress,
      this.city,
      this.zipCode,
      this.orders);
    console.log(this.lang);
    let orderService = new CycicService(this.http);
    orderService.createOrder(order);

  }

  /**
   * selectCable
   */


  guitarCable() {
    this.cableType = 1;
    this.checkCable();
    this.stepTwo();

  }
  micCable() {
    this.cableType = 2;
    this.checkCable();
    this.stepTwo();
  }
  rcaCable() {

    this.cableType = 3;
    this.checkCable();
    this.stepTwo();
  }

  checkCable() {
    if (this.cableType == 1) {
      this.kablNaziv = 'Gitaru';
    } if (this.cableType == 2) {
      this.kablNaziv = 'Mikrofon';
    } if (this.cableType == 3) {
      this.kablNaziv = 'RCA na 6,35mm';
    }
    this.orderNumberCheck();
  }
  duzinaKabla: string = '1 m';
  cableLenght: number = 0;

  proveraDuzine() {
    if (this.cableLenghtFinal == 1) {
      this.cableLenght = 1;
      this.duzinaKabla = '1 m';
    } if (this.cableLenghtFinal == 2) {
      this.cableLenght = 1.5;
      this.duzinaKabla = '1,5 m';
    } if (this.cableLenghtFinal == 3) {
      this.cableLenght = 2;
      this.duzinaKabla = '2 m';
    } if (this.cableLenghtFinal == 4) {
      this.cableLenght = 2.5;
      this.duzinaKabla = '2,5 m';
    } if (this.cableLenghtFinal == 5) {
      this.cableLenght = 3;
      this.duzinaKabla = '3 m';
    } if (this.cableLenghtFinal == 6) {
      this.cableLenght = 3.5;
      this.duzinaKabla = '3,5 m';
    } if (this.cableLenghtFinal == 7) {
      this.cableLenght = 5;
      this.duzinaKabla = '5 m';
    } if (this.cableLenghtFinal == 8) {
      this.cableLenght = 6;
      this.duzinaKabla = '6 m';
    } if (this.cableLenghtFinal == 9) {
      this.cableLenght = 10;
      this.duzinaKabla = '10 m';
    }
    this.orderPriceCheck();
    this.orderNumberCheck();
  }

  cablePattern = 0;
  kablBojaJacka = 0;
  orderNumberCheck() {
    if (this.cableColorNumber == 1) {
      this.stepFour();
      this.orderNumber = "1" + this.cableType + this.cableLenghtFinal + this.cableColorNumber + this.singleColor + this.cableProtectionColor;

    }
    if (this.cableColorNumber == 2) {

      this.orderNumber = "2" + this.cableType + this.cableLenghtFinal + this.cableColorNumber + this.cablePattern + this.primaryColor + this.secondaryColor + this.cableProtectionColor;
    }

  }
  orders: OrderMod[] = [];
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

  click5() {
    this.orderNumberCheck()
    this.stepSix();

  }
  flag = false;
  click6() {
    if (this.flag == false) {
      // this.acceptOrder();
     
      this.flag = true;
    }else {
      this.editOrder();
    }
      


  }
  c3() {
    if (this.color3 == false) {
      this.color3 = true;
      document.getElementById("defaultCheck3").setAttribute('checked', '');
      // this.proveraBoje();
    }
  }
  c4() {
    if (this.color4 == false) {
      this.color4 = true;
      document.getElementById("defaultCheck4").setAttribute('checked', '');
      // this.proveraBoje();
    }
  }
  c5() {
    if (this.color5 == false) {
      this.color5 = true;
      document.getElementById("defaultCheck5").setAttribute('checked', '');
      // this.proveraBoje();
    }
  }
  c6() {
    if (this.color6 == false) {
      this.color6 = true;
      document.getElementById("defaultCheck6").setAttribute('checked', '');
      // this.proveraBoje();
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
    if (this.cablePattern != 0) {
      this.stepFour();
    }
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
      this.stepFive();
      if (this.secondaryColor == this.primaryColor) {
        this.srcFullPathForColor = this.previousPath;
        document.getElementById("previewPattern").setAttribute('src', this.previousPath);
        // document.getElementById("previewPatternTwo").setAttribute('src', this.previousPath);



      } else {
        this.srcPath = this.srcPathBase + this.patternLeftOrRight + "/" + this.patternColorFolder + "/" + this.patterColorSubFolder + "/" + this.patternColorFileName + '.svg';
        this.srcFullPathForColor = this.srcPath;
        this.previousPath = '';
        this.previousPath += this.srcPath;
        if(this.primaryColor != this.secondaryColor){
          this.paint();
        }else{
          document.getElementById("previewPattern").setAttribute('src', this.srcFullPathForColor);
        }
       
        // document.getElementById("previewPatternTwo").setAttribute('src', this.srcPath);
      }
      this.stepFive();
    }

    this.orderNumberCheck();

  }
  paint(){
    document.getElementById("previewPattern").setAttribute('src', this.srcFullPathForColor);
  }
  orderId = 0;
  srcFullPathForColor = "";
  // acceptOrder() {
  //   this.orderData = new OrderMod(
      
  //     this.orderId,
  //     this.orderNumber,
  //     this.cableType,
  //     this.cableLenght,
  //     this.cableColorNumber,
  //     this.cablePattern,
  //     this.singleColor,
  //     this.primaryColor,
  //     this.secondaryColor,
  //     this.cableProtectionColor,
  //     this.srcFullPathForColor);
  //   this.orders[this.orderId] = this.orderData;
  //   this.orderId++;
  //   console.log(this.orders);
  // }
  acceptOrder2(cableNumber:number) {
    console.log(this.srcFullPathForColor);
    this.orderData = new OrderMod(
      this.orderPrice,
      this.orderId,
      this.orderNumber,
      this.cableType,
      this.cableLenght,
      this.cableColorNumber,
      this.cablePattern,
      this.singleColor,
      this.primaryColor,
      this.secondaryColor,
      this.cableProtectionColor,
      this.srcFullPathForColor);
   
   
    // if(JSON.parse(sessionStorage.getItem('orderID')) == null){
    //   sessionStorage.setItem('orderID',this.orderId.toString());
    //  console.log('if 1.');
    // }else{
      this.orderId = JSON.parse(sessionStorage.getItem('orderID'));
      console.log(this.orderId);
    // }
    // if(JSON.parse(sessionStorage.getItem('orders')) == null){
     
    //   this.orders[this.orderId] = this.orderData;
    //   sessionStorage.setItem('orders',JSON.stringify(this.orders));
    //   this.resetData();
    //   console.log('if 2.');
    // }else{
      // console.log('else 2.');
      this.orders = JSON.parse(sessionStorage.getItem('orders'));
      this.orders[this.orderId] = this.orderData;
      this.orderId++;
      sessionStorage.setItem('orderID',this.orderId.toString());
      sessionStorage.setItem('orders',JSON.stringify(this.orders));
      this.resetData();
    // }
    
  }
  orderPriceCheck(){
    if(this.cableLenght ==1){
      this.orderPrice = 1900;
      this.additionalPriceforMICandRCA();
    }
    if(this.cableLenght ==1.5){
      this.orderPrice = 2200;
      this.additionalPriceforMICandRCA();
    }
    if(this.cableLenght ==2){
      this.orderPrice = 2500;
      this.additionalPriceforMICandRCA();
    }
    if(this.cableLenght ==2.5){
      this.orderPrice = 2800;
      this.additionalPriceforMICandRCA();
    }
    if(this.cableLenght ==3){
      this.orderPrice = 3200;
      this.additionalPriceforMICandRCA();
    }
    if(this.cableLenght ==3.5){
      this.orderPrice = 3450;
      this.additionalPriceforMICandRCA();
    }
    if(this.cableLenght ==5){
      this.orderPrice = 4200;
      this.additionalPriceforMICandRCA();
    }
    if(this.cableLenght ==6){
      this.orderPrice = 4700;
      this.additionalPriceforMICandRCA();
    }
    if(this.cableLenght ==10){
      this.orderPrice = 6950;
      this.additionalPriceforMICandRCA();
    }
  }
  additionalPriceforMICandRCA(){
    if(this.cableType == 2 || this.cableType ==3){
      this.orderPrice += 350;
    }
  }
  resetData(){
      this.orderPrice = 0;
      this.orderNumber = '';
      this.cableType= 0;
      this.cableLenght= 0;
      this.cableColorNumber= 0;
      this.cablePattern= 0;
      this.singleColor= 0;
      this.primaryColor= 0;
      this.secondaryColor= 0;
      this.cableProtectionColor= 0;
      this.srcFullPathForColor = "";
  }
  editOrder() {
    // this.orderData = new OrderMod(
    //   this.orderId,
    //   this.orderNumber,
    //   this.cableType,
    //   this.cableLenght,
    //   this.cableColorNumber,
    //   this.cablePattern,
    //   this.singleColor,
    //   this.primaryColor,
    //   this.secondaryColor,
    //   this.cableProtectionColor,
    //   this.srcFullPathForColor);
    // this.orders[this.orderId ] =this.orderData;
    // this.orderId;
  }
  delOrder(cableNumber: number){
    
      this.orderNumber = '';
      this.cableType =0;
      this.cableLenght =0;
      this.cableColorNumber =0;
      this.cablePattern =0;
      this.singleColor =0;
      this.primaryColor =0;
      this.secondaryColor =0;
      this.cableProtectionColor =0;
      this.srcFullPathForColor ='';
    
    this.orders.splice(cableNumber-1);
    this.orderId;
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
      this.srcFullPathForColor = this.srcFullPathForSingleColor;
      this.stepFive();
      // document.getElementById("previewPatternTwo").setAttribute('src', this.srcFullPathForSingleColor);
    }
    this.orderNumberCheck();
  }

  stepTwo() {
    document.getElementById("stepTwo").removeAttribute('disabled');
  }
  stepThree() {
    document.getElementById("stepThree").removeAttribute('disabled');
  }
  stepFour() {
    document.getElementById("stepFour").removeAttribute('disabled');
  }
  stepFive() {
    document.getElementById("stepFive").removeAttribute('disabled');
  }
  stepSix() {
    document.getElementById("stepSix").removeAttribute('disabled');

  }

  

}
