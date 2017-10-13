import {Component, OnInit} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "categories",
  templateUrl: "./categories.component.html"
})
export class CategoriesComponent implements OnInit {
  ngOnInit() {
    console.log('categories initialized');
  }
}
