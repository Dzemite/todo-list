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

  constructor(private service: CategoriesService) {}

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

  deleteCategory(id: any) {
    this.service.deleteCategory(id)
      .subscribe(
        () => this.updateCategories(),
        error => this.errorMessage = error
      );
  }
}
