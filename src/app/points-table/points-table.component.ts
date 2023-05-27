import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgFor, NgIf} from '@angular/common';
import {MatTableModule} from '@angular/material/table';

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
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'matches', 'won', 'lost', 'draw', 'totalgoals', 'points'];
  expandedTeam: TeamDetails | any;
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
}

export interface TeamDetails {
  name: string;
  matches: number;
  won: number;
  lost: number;
  draw: number;
  totalgoals: number;
  points: number;
}

const ELEMENT_DATA: TeamDetails[] = [
  {
    name: 'Man City',
    matches: 5,
    won: 2,
    lost: 1,
    draw: 2,
    totalgoals:7,
    points: 21
  },
  {
    name: 'Arsenal',
    matches: 5,
    won: 2,
    lost: 1,
    draw: 2,
    totalgoals:7,
    points: 21
  },
];
