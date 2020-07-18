import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs';
import { OrderMail } from '../mailtemplates/order.model';
import { Discount } from '../mailtemplates/discount.model';


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
    discounts: Discount [] = [];
    // post("/api/contact")
    createOrder(newOdred: OrderMail) {
       console.log('contact service ts');
        this.http
            .post<{ message: string }>(this.url, newOdred)
            .subscribe(responseData => {
                console.log(responseData.message);
            
            });
    }
    discountOrder(){
        this.http
        .post<{ discounts: string }>('api/discont',null)
        .subscribe(responseData => {
            this.discounts = JSON.parse(responseData.discounts);
            localStorage.setItem('discounts',JSON.stringify(this.discounts));
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