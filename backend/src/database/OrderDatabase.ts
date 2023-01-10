import { Order } from "../Models/Order";
import { BaseDatabase } from "./BaseDatabase";
import { ProductDatabase } from "./ProductDatabase";



export class OrderDatabase extends BaseDatabase{
    public static ORDERS = "Orders"
    public static ORDER_ITEMS = "Orders_Items"

    public createOrder = async(order:Order)=>{
        await BaseDatabase.connection(OrderDatabase.ORDERS)
        .insert({
            order_id:order.getId(),
            client_id:
        })
    }

    public insertItemOnOrder = async (orderItem:IOrderItemDB):Promise<void> =>{
        await BaseDatabase
        .connection(OrderDatabase.ORDERS)
        .insert(orderItem)

    }
    public getPrice = async(productName:string):Promise<number | undefined> =>{
        const result: any[] = 
        await BaseDatabase
        .connection(ProductDatabase.PRODUCTS)
        .select("price")
        .where({name:productName})

        return result[0].price as number
    }
    public getOrders = async():Promise<IOrderDB[]> =>{
        const result:IOrderDB[] = 
        await BaseDatabase
        .connection(OrderDatabase.ORDERS)
        .select()
        
        return result
    }

    public getOrderItem = async (orderId:string): Promise<IOrderItemDB[]> =>{
     const result:IOrderItemDB[] = await BaseDatabase
     .connection(OrderDatabase.ORDER_ITEMS)
     .select()
     .where({order_id: orderId}) 

     
    return result
    }

    
      };
 ;