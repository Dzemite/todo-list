import {Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Todo} from '../../entities/todo';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-template-edit-dialog',
  templateUrl: './template-edit-todo-dialog.component.html',
  styleUrls: ['./template-edit-todo-dialog.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateEditTodoDialogComponent implements OnInit {

  public todoForChange: Todo;

  public editTodoForm = new FormGroup({
    name: new FormControl()
  });

  constructor(private dialogRef: MatDialogRef<TemplateEditTodoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.todoForChange = Object.assign({}, this.data.todo);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): Todo {
    return this.todoForChange;
  }
}
