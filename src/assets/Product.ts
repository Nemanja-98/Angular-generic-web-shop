
export class Product {    
    name : string
    price : number
    image : string
    description : string
    constructor(name : string, price : number, image : string, desc : string){
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = desc
    }

}

export default Product;