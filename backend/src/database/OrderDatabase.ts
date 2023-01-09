import { Order } from "../Models/Order";
import { BaseDatabase } from "./BaseDatabase";
import { UserDatabase } from "./UserDatabase";

export class OrderDatabase extends BaseDatabase{
    public static ORDERS = "Orders"

    public createOrder = async(order:Order)=>{
        await BaseDatabase.connection(OrderDatabase.ORDERS)
        .insert({
            order_id:order.getId(),
            client_id:
        })
    }
    
      };
 ;