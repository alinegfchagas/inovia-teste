export interface Order {
  order_id: string;
  client_id: string;
  products: string;
  quantity_item: number;
  product_total: number;
  value: number;
  order_date: Date;
  order_total: string;
}
 export class OrderDB{
  constructor(
  private order_id: string,
  private client_id: string,
  private products: string,
  private quantity_item: number,
  private product_total: number,
  private value: number,
  private order_date: Date,
  private order_total: string
  ){}
public getId = () => {
    return this.order_id
  };
  public setId = (newId: string) => {
    this.order_id = newId
  };
  public getClientId = () => {
    return this.client_id
  };
  public setClientId = (newClientId: string) => {
    this.client_id = newClientId
  };
  public getProducts = () => {
    return this.products
  };
  public setProducts = (newProduct: string) => {
    this.products = newProduct
  };
  public getQuantityItem = () => {
    return this.quantity_item
  };
  public setQuantityItem = (newQuantityItem:number) => {
    this.quantity_item = newQuantityItem
  };
  public getProductTotal = () => {
    return this.product_total
  };
  public setProductTotal = (newProductTotal: number) => {
    this.product_total = newProductTotal
  };
  public getValue = () => {
    return this.value
  };
  public setVaslue = (newValue: number) => {
    this.value = newValue
  };
  public getOrderDate = () => {
    return this.order_date
  };
  public setOrderDate = (newOrderDate: Date) => {
    this.order_date = newOrderDate
  };
  public getOrderTotal = () => {
    return this.order_total
  };
  public setOrderTotal = (newOrderTotal: string) => {
    this.order_total = newOrderTotal
  };

 }
