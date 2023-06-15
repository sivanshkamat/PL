import { Injectable } from '@angular/core';
import {  from, Observable,} from 'rxjs';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  UserCredential,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = authState(this.auth);


  signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  login(email: any, password: any): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
  
  logout(): Observable<any> {
    return from(this.auth.signOut());
  }  constructor(public auth: Auth) {}

}