import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { ContactMail } from '../mailtemplates/contact.model';
import { Observable, of } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json'
              }
    )

};
const dataContact =
{
    "personalizations":
        [{
            "to":
                [{ "email": "ivanjoca@gmail.com", "name": "John Doe" }],
            "subject": "Hello, World!"
        }],
    "content": [{ "type": "text/plain", "value": "Heya!" }], "from": { "email": "stankovicmivan@gmail.com", "name": "Sam Smith" }, "reply_to": { "email": "sam.smith@example.com", "name": "Sam Smith" }
};
//      "build": "ng build --prod --base-href=/CustomCable/",

// "postinstall": "ng build --aot --prod --output-path dist",
// "heroku-postbuild": "ng build --prod"
@Injectable()
export class ContactService {

    constructor(private http: HttpClient) { }

    private url = '/api/contact';

    // post("/api/contact")
    createContact(newContact: ContactMail) {
       console.log('contact service ts');
        this.http
            .post<{ message: string }>(this.url, newContact)
            .subscribe(responseData => {
                console.log(responseData.message);
            
            });
    }
    // createContact(newContact: ContactMail):Observable<ContactMail> {
    //     console.log(newContact);
    //     return this.http.post<ContactMail>('http://localhost:8080/api/contact', newContact);
    //     // return this.http.post<ContactMail>(this.url, newContact, httpOptions)
    //     //   .pipe(
    //     //     catchError(this.handleError('addSmartphone', newContact))
    //     //   );
    //   }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }
    private log(message: string) {
        console.log(message);
    }
}
