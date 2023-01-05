import { UserDatabase } from "../database/UserDatabase";
import { ParamsError } from "../errors/ParamsError";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private generateId: GenerateId,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public signup = async (input: any) => {
    const { name, adress, phone, email, birth_date, login, password } = input;

    if (name !== "string") {
      throw new ParamsError("Parâmetro 'nome' inválido");
    }
    if (name.length < 3) {
      throw new ParamsError("Parâmetro 'nome' deve conter mais de 3 caracteres");
    }
    if ( adress !== "string") {
      throw new ParamsError("Parâmetro 'endereço' inválido");
    }
    if ( phone !== "number") {
      throw new ParamsError("Parâmetro 'telefone' inválido");
    }

    if ( phone.length < 11) {
      throw new ParamsError("Parâmetro 'telefone' deve conter 11 dígitos: DDD + 9 números");
    }

    if ( password !== "string") {
      throw new ParamsError("Parâmetro 'password' inválido");
    }

    if (password.length < 6) {
      throw new ParamsError("Parâmetro 'password' inválido: mínimo de 6 caracteres");
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new ParamsError("Parâmetro 'email' inválido");
    }

    if (birth_date !== "date") {
      throw new ParamsError("Parâmetro 'data de nascimento' inválido");
    }

    if (login !== "string") {
      throw new ParamsError("Parâmetro 'login' inválido");
    }
    if (login.length < 3) {
      throw new ParamsError("Parâmetro 'login' deve ter mais de 3 caracteres");
    }
    const id = this.generateId.generateId()

    const hashedPassword = await this.hashManager.hash(password);
    
    
     
  };
}
