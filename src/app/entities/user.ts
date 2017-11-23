export class User {
  public _id: string;
  public role: string;
  public name: string;
  public login: string;
  public password: string;

  constructor(id, role, name, login, password) {
    this._id = id;
    this.role = role;
    this.name = name;
    this.login = login;
    this.password = password;
  }
}
