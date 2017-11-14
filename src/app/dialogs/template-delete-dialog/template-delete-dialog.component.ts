import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Category} from '../../todo/todo-categories/category';

@Component({
  selector: 'app-template-delete-dialog',
  templateUrl: './template-delete-dialog.component.html',
  styleUrls: ['./template-delete-dialog.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateDeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TemplateDeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
