import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; //header
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'; //icon
import { MatButtonModule } from '@angular/material/button';
import {NgFor} from '@angular/common';
import { FormFillComponent } from './form-fill/form-fill.component';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule,
    MatIconModule, MatButtonModule, NgFor, FormFillComponent],
  
})
export class DialogComponent {
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
}
