import { OrderDatabase } from "../database/OrderDatabase";
import { ParamsError } from "../errors/ParamsError";
import { User } from "../Models/User";
import { GenerateId } from "../services/GenerateId";

export class OrderBusiness{
    constructor(
        private orderDatabase:OrderDatabase, 
        private generateId:GenerateId
    ){}
    
    public createOrder = async(input:any)=>{
        const {client_id, products, quantity_item, product_total, value, order_date, order_total} = input

        if(product_total === 0) {
            throw new ParamsError("É preciso haver pelo menos um item no pedido!")
        }
       
    }
}