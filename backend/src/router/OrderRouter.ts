import { Router } from "express";
import { OrderDatabase } from "../database/OrderDatabase";
import { GenerateId } from "../services/GenerateId";

export const orderRouter = Router()

const orderController = new OrderController(
    new OrderBusiness(
        new OrderDatabase(), 
        new GenerateId()
    )
)

orderRouter.post("/orders", orderController.createOrder)
orderRouter.get("/my-orders", orderController.getOrders)