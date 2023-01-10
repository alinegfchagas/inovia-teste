export interface IProductDB {
  id: string,
  name: string,
  price: number,
  brand: string,
  product_tax: number,
  quantity: number,
  product_image: string,
  especification:string[]
}

export interface ProductEspecification {
    name: string,
    description: string,
    value: number
}

export class ProductDB {
  constructor(
    private id: string,
    private name:string,
    private price:number,
    private brand:string,
    private product_tax:number,
    private quantity:number,
    private product_image:string,
    private especification:string[]
  ){}

  public getId = () => {
    return this.id
  };
  public setId = (newId: string) => {
    this.id = newId
  };
  public getProductName = () => {
    return this.name
  };
  public setProductName = (newName: string) => {
    this.name = newName
  };
  public getPrice = () => {
    return this.price
  };
  public setPrice = (newPrice: number) => {
    this.price = newPrice
  };
  public getBrand = () => {
    return this.brand
  };
  public setBrand = (newBrand: string) => {
    this.brand = newBrand
  };
  public getProductTax = () => {
    return this.product_tax
  };
  public setProductTax = (newProductTax: number) => {
    this.product_tax = newProductTax
  };
  public getQuantity = () => {
    return this.quantity
  };
  public setQuantity = (newQuantity: number) => {
    this.quantity = newQuantity
  };
  public getProductImage = () => {
    return this.product_image
  };
  public setProductImage = (newProductImage: string) => {
    this.product_image = newProductImage
  };
  public getEspecification = () => {
    return this.especification
  };
  public setEspecification = (newEspecification: string[]) => {
    this.especification = newEspecification
  };
}

export class ProductEspecificationDB {
  constructor(
 private name: string,
 private description: string,
 private value: number
  ){}
  
  public getName=() =>{
    return this.name;
  };

  public setName = (newName: string) => {
    this.name = newName;
  };

  public getDescription=() =>{
    return this.description;
  };

  public setDescription = (newDescription: string) => {
    this.description = newDescription;
  };

  public getValue=() =>{
    return this.value;
  };

  public setValue = (newValue: number) => {
    this.value = newValue;
  };

}