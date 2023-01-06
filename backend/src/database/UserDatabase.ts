import { IUserDB, User } from "../Models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static CLIENTS = "Clients";

  public UserDBModel = (user: User): IUserDB => {
    const UserDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      adress: user.getAdress(),
      phone: user.getPhone(),
      email: user.getEmail(),
      birth_date: user.getBirthDate(),
      login: user.getLogin(),
      password: user.getPassword(),
      profile_pic: user.getProfilePic(),
    };
    return UserDB;
  };

  public signUp = async (user: User) => {
    await BaseDatabase.connection(UserDatabase.CLIENTS)
    .insert( 
    { id: user.getId(),
      name: user.getName(),
      adress: user.getAdress(),
      phone: user.getPhone(),
      email: user.getEmail(),
      birth_date: user.getBirthDate(),
      login: user.getLogin(),
      password: user.getPassword(),
      profile_pic: user.getProfilePic()});
  };

  public findUserByEmail = async (email: string) => {
    const result: IUserDB[] = await BaseDatabase.connection(
      UserDatabase.CLIENTS
    ).where({ email });
    return result[0];
  };

  public findUserByLogin = async (login: string) => {
    const result: IUserDB[] = await BaseDatabase.connection(
      UserDatabase.CLIENTS
    ).where({ login });
    return result[0];
  };

}
