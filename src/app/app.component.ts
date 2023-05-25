import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';


import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Premiere-League';

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '40%',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
