import { Request, Response } from "express";
import { validateHeaderValue } from "http";

export class ProductController{
    constructor(
        private orderBusiness:OrderBusiness
    ){}

    public createOrder = async(req:Request, res:Response)=> {
        try {
            const input = {
               
            }
            const response= await this.orderBusiness.createOrder()
            res.status(201).send(response)   
        } catch (error) {
            
        }
    }
}