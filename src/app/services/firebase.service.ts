import { Injectable } from '@angular/core';
import { Database, ref, onValue, getDatabase } from 'firebase/database';
import { OnInit } from '@angular/core';
import { TeamDataType } from '../dialog/team-detail/team-datatype';


@Injectable({
  providedIn: 'root',
})
export class FirebaseService implements OnInit {
  
  team ?: TeamDataType;    
  
  constructor(public database : Database) {
    this.database = getDatabase(); // Initialize the database
  }




  ngOnInit(): void {
    const starCountRef = ref(this.database, 'TeamList/' );
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log('data from firebase: ',data)
  });
  }

}
