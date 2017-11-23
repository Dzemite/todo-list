export class Todo {
  public _id: string;
  public name: string;
  public completed: boolean;
  public categoryID: string;

  constructor(id, name, completed, categoryId) {
    this._id = id;
    this.name = name;
    this.completed = completed;
    this.categoryID = categoryId;
  }
}
