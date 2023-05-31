import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Premiere-League';

  constructor(
    public dialog: MatDialog,
    public auth:AuthService,
    private router: Router) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '30%',
      height: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  logout(){
    this.auth.logout().subscribe(()=> {
      this.router.navigate(['']);
    })
  }

}
