import { Injectable } from '@angular/core';
import { Database, ref, get } from '@angular/fire/database';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

interface Team {
  name: string;
  matches: number;
  won: number;
  lost: number;
  draw: number;
  totalgoals: number;
  points: number;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: Database) { } 
  
  fetchPointsTableData(): Observable<Team[]> {
    const databaseRef = ref(this.db, 'TeamList');
    const promise = get(databaseRef);
    return from(promise).pipe(
      map(snapshot => {
        const teamList: Team[] = [];
        snapshot.forEach(childSnapshot => {
          const team: Team = childSnapshot.val();
          teamList.push(team);
        });
        return teamList;
      })
    );
  }
}