export class OrderMod {
    orderPrice: number;
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
        orderPrice: number,
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
        this.orderPrice= orderPrice;
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