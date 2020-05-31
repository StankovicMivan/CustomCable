import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { ContactMail } from '../mailtemplates/contact.model';
import { Observable, of } from 'rxjs';
import { OrderMail } from '../mailtemplates/order.model';


const httpOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json'
            // 'Authorization': 'Bearer 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'
        }
    )

};


@Injectable()
export class CycicService {

    constructor(private http: HttpClient) { }

    private url = 'api/order';

    // post("/api/contact")
    createOrder(newOdred: OrderMail) {
       console.log('contact service ts');
        this.http
            .post<{ message: string }>(this.url, newOdred)
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