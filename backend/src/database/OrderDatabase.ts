import { Order, OrderDB } from "../Models/Order";
import { BaseDatabase } from "./BaseDatabase";
import { ProductDatabase } from "./ProductDatabase";

export class OrderDatabase extends BaseDatabase {
  public static ORDERS = "Orders";

  public createOrder = async (order: OrderDB) => {
    await BaseDatabase.connection(OrderDatabase.ORDERS).insert({
      order_id: order.getId(),
      client_id: order.getClientId,
      products: order.getProducts(),
      quantity_item: order.getQuantityItem(),
      product_total: order.getProductTotal(),
      value: order.getValue(),
      order_date: order.getOrderDate(),
      order_total: order.getOrderTotal(),
    });
  };

  public insertItemOnOrder = async (orderItem: OrderDB): Promise<void> => {
    await BaseDatabase.connection(OrderDatabase.ORDERS).insert(orderItem);
  };

  public getPrice = async (
    productName: string
  ): Promise<number | undefined> => {
    const result: any[] = await BaseDatabase.connection(
      ProductDatabase.PRODUCTS
    )
      .select("price")
      .where({ name: productName });

    return result[0].price as number;
  };
  
  public getOrders = async (): Promise<OrderDB[]> => {
    const result: OrderDB[] = await BaseDatabase.connection(
      OrderDatabase.ORDERS
    ).select();

    return result;
  };

  public getOrderItem = async (orderId: string): Promise<OrderDB[]> => {
    const result: OrderDB[] = await BaseDatabase.connection(
      OrderDatabase.ORDERS
    )
      .select()
      .where({ order_id: orderId });

    return result;
  };
}
