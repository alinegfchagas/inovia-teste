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
