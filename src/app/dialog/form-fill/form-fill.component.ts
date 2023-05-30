import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; //header
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'; //icon
import { MatButtonModule } from '@angular/material/button';
import {NgFor} from '@angular/common';
import { TeamDetailComponent } from '../../team-detail/team-detail.component';
import {MatDialog} from '@angular/material/dialog';
import { FirebaseService, Team } from 'src/app/services/firebase.service';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-fill',
  templateUrl: './form-fill.component.html',
  styleUrls: ['./form-fill.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule,
    MatIconModule, MatButtonModule, NgFor, TeamDetailComponent, FormsModule,MatInputModule ],
  
})
export class FormFillComponent {
  form: FormGroup;
  teamList: { name: string }[]=[]; //By adding ! after the teamList property declaration, you indicate to TypeScript that even though it doesn't have an initializer in the constructor, it will be assigned a value before being used in the code.
  dataSource: any[]= [];
  constructor(  
    public dialog: MatDialog,
    private fb: FormBuilder,
    private firebaseService: FirebaseService
)
{
    this.form = this.fb.group({
      team1: [''],
      team2: [''],
      winner: ['']
    }); 
    this.firebaseService.fetchPointsTableData().subscribe(data => {
      this.teamList = data.map((team: any) => team.name);
      this.dataSource = Object.values(data);
    });
  }
    

  openDetail(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(TeamDetailComponent, {
      width: '30%',
      height: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  updateTable(){
    const team1= this.form.value.team1;
    const team2 = this.form.value.team2;
    const team1Goals = this.form.value.team1Goals;
    const team2Goals = this.form.value.team2Goals;
    // console.log(team1Goals, team2Goals);
    try
    {
    if (team1 && team2 ) {
      this.firebaseService.updatePointstableData( team1, team2, team1Goals, team2Goals);
      this.dialog.closeAll();
    }
  }
    catch(err){console.log(err)}
    
  }
}
