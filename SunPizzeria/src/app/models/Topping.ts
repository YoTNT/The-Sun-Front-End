export class Topping{
    toppingId:number;
    toppingName:string;
    toppingCost:number;

    constructor (toppingId:number, toppingName:string, toppingCost:number){
       this.toppingId = toppingId;
        this.toppingName = toppingName;
        this.toppingCost = toppingCost;
    }
}