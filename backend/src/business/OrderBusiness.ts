import { OrderDatabase } from "../database/OrderDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { GenerateId } from "../services/GenerateId";

export class OrderBusiness {
  constructor(
    private orderDatabase: OrderDatabase,
    private generateId: GenerateId
  ) {}

  public createOrder = async (input: any) => {
    const productInput = input.product;

    if (productInput === 0) {
      throw new ParamsError("É preciso haver pelo menos um item no pedido!");
    }
    const products = productInput.map((product:any) => {
      if (product.quantity <= 0) {
        throw new ParamsError(
          "Quantidade inválida! A quantidade mínima é 1"
        );
      }

      return {
        ...product,
        price: 0,
      };
    });

    for (let product of products) {
      const price = await this.orderDatabase.getPrice(product.name);

      if (!price) {
        throw new NotFoundError("Pizza não existe");
      }

      product.price = price;
    }
    const order_id = this.generateId.generateId();

    for (let product of products) {
      const orderItem: any= {
        id: this.generateId.generate(),
        pizza_name: product.name,
        price: product.price,
        quantity: product.quantity,
        order_id: order_id
      };

      await this.orderDatabase.insertItemOnOrder(orderItem);
    }
  };
}
