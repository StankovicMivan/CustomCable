import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ContactService } from './contact.service';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { ContactMail } from '../mailtemplates/contact.model';
// import {ContactService} from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  constructor(private http: HttpClient, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ref.detectChanges();
    
  }
  message : ContactMail ;
  yourName: string ='';
  yourEmail: string = '';
  yourPhone: string = '';
  yourMessage: string = '';


  sendContactMail(){
    this.message = new ContactMail(this.yourName, this.yourEmail, this.yourPhone, this.yourMessage);
    // console.log(this.message);
    
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


//  httpOptions = {
  //   headers: new HttpHeaders(
  //       {
  //           'Content-Type': 'application/json',
  //           'Authorization': 'Bearer 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'
  //       }
  //   )

// };
//    adata = {
//     "personalizations":
//         [{
//             "to":
//                 [{ "email": "ivanjoca@gmail.com", "name": "John Doe" }],
//             "subject": "Hello, World!"
//         }],
//     "content": [{ "type": "text/plain", "value": "Heya!" }], "from": { "email": "stankovicmivan@gmail.com", "name": "Sam Smith" }, "reply_to": { "email": "sam.smith@example.com", "name": "Sam Smith" }
// };

//  let data = JSON.stringify({
  //   "personalizations": [
  //     {
  //       "to": [
  //         {
  //           "email": "ivanjoca@example.com",
  //           "name": "Ivan Stankovic"
  //         }
  //       ],
  //       "dynamic_template_data": {
  //         "verb": "",
  //         "adjective": "",
  //         "noun": "",
  //         "currentDayofWeek": ""
  //       },
  //       "subject": "Hello, World!"
  //     }
  //   ],
  //   "from": {
  //     "email": "stankovicmivan@gmail.com",
  //     "name": "John Doe"
  //   },
  //   "reply_to": {
  //     "email": "noreply@johndoe.com",
  //     "name": "John Doe"
  //   }
  // });
  // let xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;
  // xhr.addEventListener("readystatechange", function () {
  //   if (this.readyState === this.DONE) {
  //     console.log(this.responseText);
  //   }
  // });
  // xhr.open("POST", "https://api.sendgrid.com/v3/mail/send");
  // xhr.setRequestHeader("authorization", "Bearer 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");
  // xhr.setRequestHeader("content-type", "application/json");
  
  // xhr.send(data);