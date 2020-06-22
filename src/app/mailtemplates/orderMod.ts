export class OrderMod {
    orderId: number;
    orderNumber: string;
    cableType: number;
    calbeLength: number;
    cableColorNumber: number;
    cablePattern: number;
    cableColor: number;
    cableColorPrimary: number;
    cableColorSecondary: number;
    cableJackProtection: number;
    srcFullPathForColor: string;

    constructor(
        orderId: number,
        orderNumber: string,
        cableType: number,
        calbeLength: number,
        cableColorNumber: number,
        cablePattern: number,
        cableColor: number ,
        cableColorPrimary: number,
        cableColorSecondary: number ,
        cableJackProtection: number,
        srcFullPathForColor: string,


    ) {

        this.orderId = orderId;
        this.orderNumber = orderNumber;
        this.cableType = cableType;
        this.calbeLength = calbeLength;
        this.cableColorNumber = cableColorNumber;
        this.cablePattern = cablePattern;
        this.cableColor = cableColor;
        this.cableColorPrimary = cableColorPrimary;
        this.cableColorSecondary = cableColorSecondary;
        this.cableJackProtection = cableJackProtection;
        this.srcFullPathForColor= srcFullPathForColor;

    }
}