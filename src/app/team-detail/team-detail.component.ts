import { Component } from '@angular/core';
import { TeamList } from './team-description';


@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent {  
  teamList = TeamList;

}
