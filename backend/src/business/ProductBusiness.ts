import { ProductDatabase } from "../database/ProductDatabase";
import { ParamsError } from "../errors/ParamsError";
import { ProductDB } from "../Models/Product";
// import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class ProductBusiness{
  constructor(
    private productDatabase:ProductDatabase,
    // private authenticator:Authenticator,
    private generateID:GenerateId

  ){}
    public createProduct = async (input:any) =>{
    const {
    name, price, brand, product_tax, quantity, product_image,especification, description, value
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
    if (typeof description !== "string") {
        throw new ParamsError("Parâmetro 'descrição' inválido");
      }

    if (typeof product_tax !== "number") {
        throw new ParamsError("Parâmetro 'taxa do produto' inválido");
      }

    if (typeof quantity !== "number") {
        throw new ParamsError("Parâmetro 'quantidade' inválido"); 
      }
    if (typeof value !== "string") {
        throw new ParamsError("Parâmetro 'value' inválido"); 
      }

    if (quantity <1) {
        throw new ParamsError("quantidade deve ser superior a 1 item"); 
      }

    if (typeof product_image !== "string") {
        throw new ParamsError("Parâmetro 'imagem do produto' inválido");
      }

    // if (typeof especification !== "string") {
    //     throw new ParamsError("Parâmetro 'especificação' inválido");
    //   }
      
      // const token = 
      // const payload = this.authenticator.getTokenPayload(token)

      // if(!payload){
      //     throw new ParamsError("")
      // }
  
  
      const id = this.generateID.generateId()
      console.log(3, input)
  
      const product = new ProductDB(id,
        name,
        price,
        brand,
        product_tax,
        quantity,
        product_image,
        especification,
        description, 
        value)
        
      await this.productDatabase.createProduct(product)
      const response = {
          message: "produto criado com sucesso!"
      }
      return response
    }
 
  }
    