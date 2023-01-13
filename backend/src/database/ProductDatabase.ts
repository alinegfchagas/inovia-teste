import { EspecificationDB } from "../Models/Especification";
import { IProductDB, ProductDB } from "../Models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static PRODUCTS = "Products";
  public static ESPECIFICATION = "Especifications"

  public ProductDBModel = (product: ProductDB) => {
    const ProductDB = {
      id: product.getId(),
      name: product.getProductName(),
      price: product.getPrice(),
      brand: product.getBrand(),
      product_tax: product.getProductTax(),
      quantity: product.getQuantity(),
      product_image: product.getProductImage(),
      especification:product.getEspecification()
      
    };
    return ProductDB;
  };

  public createEspecificationProduct = async (especificationProduct:EspecificationDB) => {
    await ProductDatabase.connection(ProductDatabase.ESPECIFICATION).insert({
      name: especificationProduct.getName(),
      description: especificationProduct.getDescription(),
      value: especificationProduct.getValue()
    })
  };

  public getEspecification = async():Promise<any> =>{
    const[result] = await BaseDatabase
    .connection.raw(`
    SELECT *FROM Products
    JOIN Especifications ON Especifications.name = Products.product_name;
    `)
    return result
 }

//  public getProductEspecification = async(productName:string):Promise<string[]> =>{
//   const [result] = await BaseDatabase
//   .connection(ProductDatabase.ESPECIFICATION)
//   .where({name: productName})

//   return result
// }

public getProducts = async():Promise<any> =>{
  const result = await ProductDatabase.connection(ProductDatabase.PRODUCTS)
  return result[0]
}

  public createProduct = async (product: ProductDB) => {
    await ProductDatabase.connection(ProductDatabase.PRODUCTS).insert({
      id: product.getId(),
      product_name: product.getProductName(),
      price: product.getPrice(),
      brand: product.getBrand(),
      product_tax: product.getProductTax(),
      quantity: product.getQuantity(),
      product_image: product.getProductImage(),
      especification:product.getEspecification()
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
