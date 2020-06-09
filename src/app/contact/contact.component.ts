import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ContactService } from './contact.service';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { ContactMail } from '../mailtemplates/contact.model';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import {ContactService} from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lang: string = this.route.snapshot.params['lang'];
  
  constructor(private http: HttpClient, private ref: ChangeDetectorRef, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ref.detectChanges();
    if(this.lang =='sr'){

      
      document.getElementById('name').setAttribute('placeholder', 'Ime i prezime');
      document.getElementById('email').setAttribute('placeholder', 'Email adresa');
      document.getElementById('phone').setAttribute('placeholder', 'Broj telefona');
      document.getElementById('message').setAttribute('placeholder', 'Vasa poruka');
      document.getElementById('btnS').innerHTML = "Posalji";
      
    }
  }
  message : ContactMail ;
  yourName: string ='';
  yourEmail: string = '';
  yourPhone: string = '';
  yourMessage: string = '';

  sendContactMail(){
    this.message = new ContactMail(this.yourName, this.yourEmail, this.yourPhone, this.yourMessage);
    // console.log(this.message);
    console.log(this.lang);
    let contactService= new ContactService(this.http);
    contactService.createContact(this.message);
    
    // this.contactService.postMail();
  
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

