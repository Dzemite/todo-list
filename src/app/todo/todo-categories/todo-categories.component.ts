import {Component, OnInit} from "@angular/core";
import {CategoriesService} from "../todo-services/categories.service";
import {Category} from "./category";
import {Router} from "@angular/router";
import {TodoListService} from "../todo-services/todo-list.service";

@Component({
  moduleId: module.id,
  selector: "categories",
  templateUrl: "todo-categories.component.html",
  styleUrls: ["todo-categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  errorMessage: string;

  constructor(private router: Router,
              private service: CategoriesService,
              private todoService: TodoListService) {
  }

  ngOnInit() {
    this.updateCategories();
  }

  private updateCategories() {
    this.service.getCategories()
      .subscribe(
        categories => this.categories = categories,
        error => this.errorMessage = error
      );
  }

  addNewCategory(newCategory: string) {
    var category: Category = new Category(null, newCategory);
    this.service.addCategory(category)
      .subscribe(
        () => this.updateCategories(),
        error => this.errorMessage = error
      );
  }

  editCategory(category: Category) {
    let newName = prompt('Put new name of this category.', category.name);

    if (newName) {
      category.name = newName;
      this.service.editCategory(category)
        .subscribe(
          () => this.updateCategories(),
          error => this.errorMessage = error
        )
    }
  }

  deleteCategory(category: Category) {

    let _delete = () => {
      this.service.deleteCategory(category._id)
        .subscribe(
        () => {
          this.updateCategories();
          this.router.navigate(['/todo']);
        },
          error => this.errorMessage = error
        );

      this.todoService.deleteTodosWithCategoryID(category._id);
    };

    !confirm("Вы точно хотите удалить категорию " + category.name + "?") ? null : _delete();
  }


  onSelect(selected: any) {
    this.router.navigate(["/todo", selected.$oid]);
  }
}
