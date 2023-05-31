import { ImplicitReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Database, ref, get, set, onValue } from '@angular/fire/database';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Team {
  name: string;
  matches: number;
  won: number;
  lost: number;
  draw: number;
  totalgoals: number;
  points: number;
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(public db: Database) {}

  fetchPointsTableData(): Observable<Team[]> {
    const databaseRef = ref(this.db, 'TeamList');

    return new Observable<Team[]>((observer) => {
      onValue(
        databaseRef,
        (snapshot) => {
          const teamList: Team[] = [];
          snapshot.forEach((childSnapshot) => {
            const team: Team = childSnapshot.val();
            teamList.push(team);
          });0
          observer.next(teamList);
        },
        (error) => observer.error(error)
      );
    }).pipe(map((teamList) => teamList.filter(Boolean)));
  }

  updatePointstableData(
    team1: Team,
    team2: Team,
    team1Goals: number,
    team2Goals: number
  ) {
    console.log(team1, team2);
    if (team1Goals > team2Goals) {
      team1.won += 1;
      team1.matches += 1;
      team1.points += 3;
      team1.totalgoals += team1Goals;
      team2.matches += 1;
      team2.lost += 1;
      team2.totalgoals += team2Goals;
    } else if (team1Goals < team2Goals) {
      team2.won += 1;
      team2.matches += 1;
      team2.points += 3;
      team2.totalgoals += team2Goals;
      team1.matches += 1;
      team1.lost += 1;
      team1.totalgoals += team1Goals;
    } else {
      team1.draw += 1;
      team1.matches += 1;
      team1.points += 1;
      team2.draw += 1;
      team2.matches += 1;
      team2.points += 1;
      team2.totalgoals += team2Goals;
      team1.totalgoals += team1Goals;
    }
    // Update the data in the Realtime Database using the reference of each team
    const team1Ref = ref(this.db, `TeamList/${team1.name}`);
    const team2Ref = ref(this.db, `TeamList/${team2.name}`);
    set(team1Ref, { ...team1 });
    set(team2Ref, { ...team2 });
    }
}
