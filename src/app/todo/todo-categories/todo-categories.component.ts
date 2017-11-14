import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../todo-services/categories.service';
import {Category} from './category';
import {Router} from '@angular/router';
import {TodoListService} from '../todo-services/todo-list.service';
import {MatDialog} from '@angular/material';
import {TemplateDeleteDialogComponent} from '../../dialogs/template-delete-dialog/template-delete-dialog.component';
import {AppSettings} from '../../app.settings';

@Component({
  moduleId: module.id,
  selector: 'todo-categories',
  templateUrl: 'todo-categories.component.html',
  styleUrls: ['todo-categories.component.less']
})
export class CategoriesComponent implements OnInit {
  categories: {} | Category[];
  errorMessage: string;

  constructor(private router: Router,
              private service: CategoriesService,
              private todoService: TodoListService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.refreshCategories();
  }

  private refreshCategories() {
    this.service.getCategories()
      .subscribe(
        categories => this.categories = categories,
        error => this.errorMessage = error
      );
  }

  addNewCategory(newCategory: string) {
    if (!newCategory) return;
    const category: Category = new Category(null, newCategory);
    this.service.addCategory(category)
      .subscribe(
        () => this.refreshCategories(),
        error => this.errorMessage = error
      );
  }

  editCategory(category: Category) {
    const newName = prompt('Put new name of this category.', category.name);

    if (newName) {
      category.name = newName;
      this.service.editCategory(category)
        .subscribe(
          () => this.refreshCategories(),
          error => this.errorMessage = error
        );
    }
  }


  deleteCategory(category: Category): void {
    const dialogRef = this.dialog.open(TemplateDeleteDialogComponent, {
      width: AppSettings.DELETE_DIALOG_WIDTH,
      data: {
        name: category.name,
        type: 'category'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._deleteCategory(category);
      }
    });
  }

  private _deleteCategory(category: Category) {
    this.service.deleteCategory(category._id)
      .subscribe(
        () => {
          this.refreshCategories();
          this.router.navigate(['/todo']);
        },
        error => this.errorMessage = error
      );

    this.todoService.deleteTodosWithCategoryID(category._id);
  }

  onSelect(selected: Category) {
    this.router.navigate(['/todo', selected._id['$oid'], {category: selected.name}]);
  }
}
