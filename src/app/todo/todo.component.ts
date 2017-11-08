import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogOverviewExampleDialogComponent } from './dialogs/dialog-overview-example-dialog';

@Component({
  moduleId: module.id,
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.less']
})
export class TodoComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
