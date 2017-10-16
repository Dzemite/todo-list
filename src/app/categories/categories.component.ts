import {Component, OnInit} from "@angular/core";
import {CategoriesService} from "../db-services/index";
import {Category} from "./category";

@Component({
  moduleId: module.id,
  selector: "categories",
  templateUrl: "./categories.component.html"
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  errorMessage: string;

  constructor(private service: CategoriesService) {
  }

  ngOnInit() {
    console.log('categories initialized');
    this.updateCategories();
  }

  updateCategories() {
    let categories = this.service.getCategories()
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
    confirm("Вы точно хотите удалить категорию " + category.name + "?") ?
      this.service.deleteCategory(category._id)
        .subscribe(
          () => this.updateCategories(),
          error => this.errorMessage = error
        )
      : null;
    }
    //TODO: Need to delete all to-dos this category contain
}
