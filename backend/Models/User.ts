export interface IUserDB {
  id: string;
  name: string;
  adress: string;
  phone: number;
  email: string;
  birth_date: Date;
  login: string;
  password: string;
  profile_pic: string;
}

export class UserDB {
  constructor(
    private id: string,
    private name: string,
    private adress: string,
    private phone: number,
    private email: string,
    private birth_date: Date,
    private login: string,
    private password: string,
    private profile_pic: string
  ) {}

  public getId = () => {
    return this.id;
  };
  public setId = (newId: string) => {
    this.id = newId;
  };
  public getName = () => {
    return this.name;
  };
  public setName = (newName: string) => {
    this.name = newName;
  };
  public getAdress = () => {
    return this.adress;
  };
  public setAdress = (newAdress: string) => {
    this.adress = newAdress;
  };
  public getPhone = () => {
    return this.phone;
  };
  public setPhone = (newPhone: number) => {
    this.phone = newPhone;
  };
  public getEmail = () => {
    return this.email;
  };
  public setEmail = (newEmail: string) => {
    this.email = newEmail;
  };
  public getBirthDate = () => {
    return this.birth_date;
  };
  public setBirthDate = (newBirthDate: Date) => {
    this.birth_date = newBirthDate;
  };
  public getLogin = () => {
    return this.login;
  };
  public setLogin = (newLogin: string) => {
    this.login = newLogin;
  };
  public getPassword = () => {
    return this.password;
  };
  public setPassword = (newPassword: string) => {
    this.password = newPassword;
  };
  public getProfilePic = () => {
    return this.profile_pic;
  };
  public setProfilePic = (newProfilePic: string) => {
    this.profile_pic = newProfilePic;
  };
}
