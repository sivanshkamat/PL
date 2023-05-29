import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgFor, NgIf} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { TeamDetails, TeamList } from '../team-detail/teamlist';
import { FirebaseService } from '../services/firebase.service';


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
  imports: [MatTableModule, NgFor, MatButtonModule, NgIf, MatIconModule],
})

export class PointsTableComponent {
  // dataSource = TeamList;
  dataSource: any[] = [];
  columnsToDisplay = ['name', 'matches', 'won', 'lost', 'draw', 'totalgoals', 'points'];
  expandedTeam: TeamDetails | any;
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.fetchPointsTableData().subscribe(data => {
      this.dataSource = Object.values(data);
    });
  }
  
}
