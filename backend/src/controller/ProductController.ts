import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";

export class ProductController{
    constructor(
        private productBusiness:ProductBusiness
    ){}

    public createProduct = async (req:Request, res:Response) =>{
        try {
            const input={
                name: req.body.name,
                price:req.body.price,
                brand:req.body.brand,
                product_tax:req.body.product_tax,
                quantity:req.body.quantity,
                product_image:req.body.product_image,  
            }

            const response= await this.productBusiness.createProduct(input)
            res.status(201).send(response)
            
        } catch (error) {
            
        }
    }
}