export class Todo {
  public _id: string;
  public name: string;
  public inProgress?: boolean;
  public inTesting?: boolean;
  public completed?: boolean;
  public categoryID: string;

  constructor(id, name, categoryId, inProgress = false, inTesting = false, completed = false) {
    this._id = id;
    this.name = name;
    this.inProgress = completed;
    this.inTesting = completed;
    this.completed = completed;
    this.categoryID = categoryId;
  }
}
