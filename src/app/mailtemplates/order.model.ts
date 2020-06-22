import { OrderMod } from './orderMod';

export class OrderMail {

    yourName: string;
    yourAddress: string;
    city: string;
    zipCode : number;
    yourEmail: string;
    yourPhone: string;

    orders : OrderMod[];


    constructor(
        name: string,
        email: string,
        phone: string,
        yourAddress: string,
        city: string,
        zipCode : number,
        orders: OrderMod[]
    ) {
        this.yourName = name;
        this.yourEmail = email;
        this.yourPhone = phone;
        this.yourAddress = yourAddress;
        this.city = city;
        this.zipCode =zipCode;
        this.orders = orders;
        


    }
}