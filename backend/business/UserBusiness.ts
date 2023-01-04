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

    //
    if (typeof name !== "string") {
      throw new ParamsError("Parâmetro 'nome' inválido");
    }

    if (typeof email !== "string") {
      throw new ParamsError("Parâmetro 'email' inválido");
    }

    if (typeof password !== "string") {
      throw new ParamsError("Parâmetro 'password' inválido");
    }

    if (password.length < 6) {
      throw new ParamsError(
        "Parâmetro 'password' inválido: mínimo de 6 caracteres"
      );
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new ParamsError("Parâmetro 'email' inválido");
    }
  };
}
