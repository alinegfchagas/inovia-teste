import { IUserDB, UserDB } from "../Models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static CLIENTS = "Clients";

  public UserDBModel = (user: UserDB): IUserDB => {
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
  
  public signUp = async (user: UserDB) => {
    await BaseDatabase.connection(UserDatabase.CLIENTS).insert({
      id: user.getId(),
      name: user.getName(),
      adress: user.getAdress(),
      phone: user.getPhone(),
      email: user.getEmail(),
      birth_date: user.getBirthDate(),
      login: user.getLogin(),
      password: user.getPassword(),
      profile_pic: user.getProfilePic(),
    });
  };

//   public login = async (user: UserDB) => {
//     await BaseDatabase.connection(UserDatabase.CLIENTS).where({
//       login: user.getLogin(),
//       password: user.getPassword()
//     });
//   };
}
