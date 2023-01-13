// import { Request, Response } from "express";
// import { OrderBusiness } from "../business/OrderBusiness";
// import { BaseError } from "../errors/BaseError";


// export class ProductController{
//     constructor(
//         private orderBusiness:OrderBusiness
//     ){}

//     public createOrder = async(req:Request, res:Response)=> {
//         try {
//             const input:any = {
//                product:req.body.product
//             }
//             const response= await this.orderBusiness.createOrder(input)
//             res.status(201).send(response)   
//         } catch (error) {
//             if(error instanceof BaseError){
//                 return res.status(error.statusCode).send({message:error.message})
//             }
//             res.status(400).send({message: "Erro inesperado ao fazer pedidos."})
//         }
//     }
// }