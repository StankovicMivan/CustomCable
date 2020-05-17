import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //google api AIzaSyCuJb_V-DKS_dufiOHqND_LhID5oAkqOTk
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ref.detectChanges();
  }
  yourName: string ='';
  yourEmail: string = '';
  yourPhone: string = '';
  yourMessage: string = '';

  test(){
    console.log(this.yourName);
    console.log(this.yourEmail);
    console.log(this.yourPhone);
    console.log(this.yourMessage);
  }
  onKeyName(event: any){
    this.yourName = event.target.value;
  }
  onKeyEmail(event: any){
    this.yourEmail = event.target.value;
  }
  onKeyPhone(event: any){
    this.yourPhone = event.target.value;
  }
  onKeyMessage(event: any){
    this.yourMessage = event.target.value;
  }
  
}
