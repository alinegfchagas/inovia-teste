import { ParamsError } from "../errors/ParamsError";
import { ProductDB } from "../Models/Product";

export class ProductBusiness{

    public createProduct = async (input:any) =>{
    const {
    name, price, brand, product_tax, quantity, product_image, especification
    } = input;

    if (typeof name !== "string") {
        throw new ParamsError("Parâmetro 'nome' inválido");
      }

    if (typeof price !== "number") {
        throw new ParamsError("Parâmetro 'preço' inválido");
      }

    if (typeof brand !== "string") {
        throw new ParamsError("Parâmetro 'marca' inválido");
      }

    if (typeof product_tax !== "number") {
        throw new ParamsError("Parâmetro 'taxa do produto' inválido");
      }

    if (typeof quantity !== "number") {
        throw new ParamsError("Parâmetro 'quantidade' inválido"); 
      }

    if (quantity <1) {
        throw new ParamsError("quantidade deve ser superior a 1 item"); 
      }

    if (typeof product_image !== "string") {
        throw new ParamsError("Parâmetro 'imagem do produto' inválido");
      }
     
    }
 
  }
    
