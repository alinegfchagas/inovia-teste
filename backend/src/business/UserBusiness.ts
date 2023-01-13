import { UserDatabase } from "../database/UserDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { User } from "../Models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
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
    const {
      name,
      adress,
      phone,
      email,
      birth_date,
      login,
      password,
      profile_pic,
    } = input;

    if (typeof name !== "string") {
      throw new ParamsError("Parâmetro 'nome' inválido");
    }

    if (name.length < 3) {
      throw new ParamsError(
        "Parâmetro 'nome' deve conter mais de 3 caracteres"
      );
    }

    if (typeof adress !== "string") {
      throw new ParamsError("Parâmetro 'endereço' inválido");
    }

    if (typeof phone !== "number") {
      throw new ParamsError("Parâmetro 'telefone' inválido");
    }

    if (phone < 11) {
      throw new ParamsError(
        "Parâmetro 'telefone' deve conter 11 dígitos: DDD + 9 números"
      );
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

    // if (birth_date !== Date) {
    //   throw new ParamsError("Parâmetro 'data de nascimento' inválido");
    // }

    if (typeof login !== "string") {
      throw new ParamsError("Parâmetro 'login' inválido");
    }

    if (login.length < 3) {
      throw new ParamsError("Parâmetro 'login' deve ter mais de 3 caracteres");
    }

    const id = this.generateId.generateId();
    const hashedPassword = await this.hashManager.hash(password);
    const user = new User(
      id,
      name,
      adress,
      phone,
      email,
      birth_date,
      login,
      hashedPassword,
      profile_pic
    );

    await this.userDatabase.signUp(user);
    const payload: ITokenPayload = {
      id: user.getId(),
      login: user.getLogin(),
    };

    const token = this.authenticator.generateToken(payload);
    const response = {
      message: "cadastro realizado com sucesso!",
      token,
    };

    return response;
  };

  public login = async (input: any) => {
    const { login, password } = input;
    if (typeof login !== "string") {
      throw new ParamsError("Parâmetro 'login' inválido");
    }

    if (typeof password !== "string") {
      throw new ParamsError("Parâmetro 'password' inválido");
    }

    if (login.length < 3) {
      throw new ParamsError(
        "Parâmetro 'login' inválido: mínimo de 3 caracteres"
      );
    }

    if (password.length < 6) {
      throw new ParamsError(
        "Parâmetro 'password' inválido: mínimo de 6 caracteres"
      );
    }
    const userDB = await this.userDatabase.findUserByLogin(login);

    if (!userDB) {
      throw new NotFoundError("Usuário não cadastrado!");
    }
    const payload: ITokenPayload = {
      id: userDB.id,
      login: userDB.login,
    };

    const token = this.authenticator.generateToken(payload);
    const response = {
      message: "login realizado com sucesso!",
      token,
    };

    return response;
  };

  public deleteUser = async (input: any) => {
    const { token, login, password, email } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new ParamsError("Insira o token");
    }

    if (!login) {
      throw new ParamsError("Insira o login");
    }
    if (!password) {
      throw new ParamsError("Insira a senha");
    }
    if (!email) {
      throw new ParamsError("Insira o email");
    }
    if (login !== payload.login) {
      throw new UnauthorizedError("Não autorizado: login inválido");
    }
    const userDB = await this.userDatabase.findUserByLogin(login);
    if (!userDB) {
      throw new NotFoundError("Usuário não Encontrado!");
    }
    if (email !== userDB.email) {
      throw new ParamsError("E-mail Inválido");
    }

    const senha = await this.hashManager.compareHash(password, userDB.password);
    
    if (true !== senha) {
      throw new ParamsError("Senha Inválida");
    }
    const response = await this.userDatabase.deleteUserByLogin(login);

    return response;
  };
}
