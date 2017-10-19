export class Todos {
  public _id: string;
  public tasks: {name: string, completed: boolean}[];
  public categoryID: string;

  constructor(id, tasks, categoryId) {
    this._id = id;
    this.tasks = tasks;
    this.categoryID = categoryId;
  }

  public addNewTask(){

  }
}
