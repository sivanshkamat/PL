import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; //header
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'; //icon
import { MatButtonModule } from '@angular/material/button';
import {NgFor} from '@angular/common';
import { TeamDetailComponent } from '../../team-detail/team-detail.component';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-form-fill',
  templateUrl: './form-fill.component.html',
  styleUrls: ['./form-fill.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule,
    MatIconModule, MatButtonModule, NgFor, TeamDetailComponent],
  
})
export class FormFillComponent {
  states: string[] = [
    'Man City',
    'Arsenal',
    'Liverpool',
    'PSG',
    'Real Madrid',
    'Man United',
    'Barcelona',
    'Chelsea',
    'Aston Villa',
    'Al Nassar'
    
  ];

  constructor(public dialog: MatDialog) {}
  openDetail(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(TeamDetailComponent, {
      width: '30%',
      height: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
