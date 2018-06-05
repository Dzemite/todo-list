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

  _status: number;
  statuses = [
    {value: 0, viewValue: 'New'},
    {value: 1, viewValue: 'In progress'},
    {value: 2, viewValue: 'In testing'},
    {value: 3, viewValue: 'Completed'}
  ];

  public editTodoForm = new FormGroup({
    name: new FormControl()
  });

  constructor(private dialogRef: MatDialogRef<TemplateEditTodoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.todoForChange = Object.assign({}, this.data.todo);

    if (this.todoForChange.inProgress && this.todoForChange.inTesting && this.todoForChange.completed) {
      this._status = 3;
    } else
    if (this.todoForChange.inProgress && this.todoForChange.inTesting && !this.todoForChange.completed) {
      this._status = 2;
    } else
    if (this.todoForChange.inProgress && !this.todoForChange.inTesting && !this.todoForChange.completed) {
      this._status = 1;
    } else
    if (!this.todoForChange.inProgress && !this.todoForChange.inTesting && !this.todoForChange.completed) {
      this._status = 0;
    }
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): Todo {console.log(this._status);
    if (this._status === 0) {
      this.todoForChange.inProgress = false;
      this.todoForChange.inTesting = false;
      this.todoForChange.completed = false;
    }
    if (this._status === 1) {
      this.todoForChange.inProgress = true;
      this.todoForChange.inTesting = false;
      this.todoForChange.completed = false;
    }
    if (this._status === 2) {
      this.todoForChange.inProgress = true;
      this.todoForChange.inTesting = true;
      this.todoForChange.completed = false;
    }
    if (this._status === 3) {
      this.todoForChange.inProgress = true;
      this.todoForChange.inTesting = true;
      this.todoForChange.completed = true;
    }

    return this.todoForChange;
  }
}
