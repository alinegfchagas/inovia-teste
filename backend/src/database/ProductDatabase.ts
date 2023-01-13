import { IProductDB, ProductDB } from "../Models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static PRODUCTS = "Products";

  public ProductDBModel = (product: ProductDB) => {
    const ProductDB = {
      id: product.getId(),
      name: product.getProductName(),
      price: product.getPrice(),
      brand: product.getBrand(),
      product_tax: product.getProductTax(),
      quantity: product.getQuantity(),
      product_image: product.getProductImage(),
      especification:product.getEspecification(), 
      description: product.getDescription(),
      value: product.getValue()
      
    };
    return ProductDB;
  };

  public createProduct = async (product: ProductDB) => {
    await ProductDatabase.connection(ProductDatabase.PRODUCTS).insert({
      id: product.getId(),
      name: product.getProductName(),
      price: product.getPrice(),
      brand: product.getBrand(),
      product_tax: product.getProductTax(),
      quantity: product.getQuantity(),
      product_image: product.getProductImage(),
      especification:product.getEspecification(), 
      description: product.getDescription(),
      value: product.getValue()
    });
  };

  public findProductByName = async (name: string) => {
    const result:IProductDB[] = await ProductDatabase.connection(
       ProductDatabase.PRODUCTS
    ).where ({name});

    return result[0]

  };

  public deleteProductByName = async(name:string)=>{
  await ProductDatabase.connection(
  ProductDatabase.PRODUCTS  
  ).delete()
  .where({name});
  
  return "Produto excluído com sucesso"
  }
}
