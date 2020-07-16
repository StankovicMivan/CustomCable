import { OrderMod } from './orderMod';

export class OrderMail {
    
    id : number;
    yourName: string;
    yourAddress: string;
    city: string;
    zipCode : number;
    yourEmail: string;
    yourPhone: string;

    orders : OrderMod[];


    constructor(
        id : number,
        name: string,
        email: string,
        phone: string,
        yourAddress: string,
        city: string,
        zipCode : number,
        orders: OrderMod[]
    ) {
        this.id =  id;
        this.yourName = name;
        this.yourEmail = email;
        this.yourPhone = phone;
        this.yourAddress = yourAddress;
        this.city = city;
        this.zipCode =zipCode;
        this.orders = orders;
        


    }
}