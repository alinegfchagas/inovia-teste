export interface Product {
    id:string,
name:string,
price:number,
brand:string,
product_tax: number,
quantity: number,
product_image:string
}

export interface ProductEspecification {
    name:string,
    description:string,
    value:number
}