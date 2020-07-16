export class Discount {
    // _id = {
    // //    oid
    // };
    end: string;
    value: number;
    name: string;
    constructor(name:string ,end: string,value: number){
        // this._id ;
        this.value = value;
        this.end = end;
        this.name = name;
    }
  }