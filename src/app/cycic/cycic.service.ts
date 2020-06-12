import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs';
import { OrderMail } from '../mailtemplates/order.model';


const httpOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json'
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