import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgFor, NgIf} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { Team } from '../services/firebase.service';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NonNullableFormBuilder } from '@angular/forms';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-points-table',
  styleUrls: ['points-table.component.scss'],
  templateUrl: 'points-table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [MatTableModule, NgFor, MatButtonModule, NgIf, MatIconModule, CommonModule, RouterLink ],
})

export class PointsTableComponent {
  dataSource: any[] = [];
  columnsToDisplay = ['name', 'matches', 'won', 'lost', 'draw', 'totalgoals', 'points'];
  expandedTeam: Team | any;
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];

  constructor(
    private firebaseService: FirebaseService,
    public auth:AuthService,
    public router:Router,
    private fb: NonNullableFormBuilder
    )
    {
      this.firebaseService.fetchPointsTableData().subscribe(data => {
        this.dataSource = Object.values(data);
      });
    }
}
