
export class Product {    
    name : string
    price : number
    image : string
    description : string
    quantity : number
    category: string
    constructor(name : string, price : number, image : string, desc : string,qty : number, ctg : string){
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = desc;
        this.quantity = qty
        this.category = ctg
    }
}

export default Product;
//  u sustini moze da bude i interfejs; comeback to this l8er