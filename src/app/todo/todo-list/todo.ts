export class Todo_list {
  public _id: string;
  public name: string;
  public completed: boolean;

  constructor(id, name, completed) {
    this._id = id;
    this.name = name;
    this.completed = completed;
  }
}
