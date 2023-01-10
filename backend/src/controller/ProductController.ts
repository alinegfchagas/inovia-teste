import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";

export class ProductController {
  constructor(private productBusiness: ProductBusiness) {}

  public createProduct = async (req: Request, res: Response) => {
    try {
      const inputEspecification = {
        name: req.body.name,
        description: req.body.description,
        value: req.body.value
      };
      const inputArray = []
      inputArray.push(inputEspecification) 

      const input = {
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        product_tax: req.body.product_tax,
        quantity: req.body.quantity,
        product_image: req.body.product_image,
        especification: inputArray,
      };

      const response = await this.productBusiness.createProduct(input);
      res.status(201).send(response);

    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(400).send({ message: "Erro inesperado ao criar pedido" });
    }
  };
}
