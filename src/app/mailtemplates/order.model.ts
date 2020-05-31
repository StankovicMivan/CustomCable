export class OrderMail {

    yourName: string;
    yourAddress: string;
    city: string;
    zipCode : number;
    yourEmail: string;
    yourPhone: string;

    cableType: number;
    calbeLength: number;
    cableColorNumber: number;
    cablePattern: number;
    cableColor: number;
    cableColorPrimary: number;
    cableColorSecondary: number;
    cableJackProtection: number;


    constructor(
        name: string,
        email: string,
        phone: string,
        yourAddress: string,
        city: string,
        zipCode : number,
        cableType: number,
        calbeLength: number,
        cableColorNumber: number,
        cablePattern: number,
        cableColor: number,
        cableColorPrimary: number,
        cableColorSecondary: number,
        cableJackProtection: number
    ) {
        this.yourName = name;
        this.yourEmail = email;
        this.yourPhone = phone;
        this.yourAddress = yourAddress;
        this.city = city;
        this.zipCode =zipCode;
        
        this.cableType = cableType;
        this.calbeLength = calbeLength;
        this.cableColorNumber = cableColorNumber;
        this.cablePattern = cablePattern;
        this.cableColor = cableColor;
        this.cableColorPrimary = cableColorPrimary;
        this.cableColorSecondary = cableColorSecondary;
        this.cableJackProtection = cableJackProtection;


    }
}