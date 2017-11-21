import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Todo} from '../../todo/todo-list/todo';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-template-edit-dialog',
  templateUrl: './template-edit-todo-dialog.component.html',
  styleUrls: ['./template-edit-todo-dialog.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateEditTodoDialogComponent implements OnInit {

  protected todoForChange: Todo;

  public editTodoForm = new FormGroup({
    name: new FormControl()
  });

  constructor(private dialogRef: MatDialogRef<TemplateEditTodoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.todoForChange = this.data.todo;
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): any {
    return this.todoForChange;
  }
}
