
export class Product {    
    name : string
    price : number
    image : string
    description : string
    quantity : number
    constructor(name : string, price : number, image : string, desc : string,qty :number){
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = desc;
        this.quantity = qty
    }
}

export default Product;
//  u sustini moze da bude i interfejs; comeback to this l8er