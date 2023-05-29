import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgFor, NgIf} from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { getDatabase, ref, onValue} from "firebase/database";
import { FirebaseService } from '../services/firebase.service';
import { TeamList } from '../team-detail/team-description';
import { TeamDataType } from '../team-detail/team-description';

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
  providers: [FirebaseService],
  standalone: true,
  imports: [MatTableModule, NgFor, MatButtonModule, NgIf, MatIconModule, ],
})

export class PointsTableComponent {
  dataSource = TeamList;
  columnsToDisplay = ['name', 'matches', 'won', 'lost', 'draw', 'totalgoals', 'points'];
  expandedTeam: TeamDataType | any;
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];

// constructor(){};
// const starCountRef = ref(db, 'TeamList/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

}