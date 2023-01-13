import { Router } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductController } from "../controller/ProductController";
import { ProductDatabase } from "../database/ProductDatabase";
import { GenerateId } from "../services/GenerateId";


export const productRouter = Router();

const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase(),
        new GenerateId()
    )
)

productRouter.post("/insert-product", productController.createProduct)

