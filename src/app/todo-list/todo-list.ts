export class Todo_list {
  public id: string;
  public name: string;
  public done: boolean;

  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.done = false;
  }
  constructor(id, name, done) {
    this.id = id;
    this.name = name;
    this.done = done;
  }
}
