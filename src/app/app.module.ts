import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from '@angular/material/toolbar'; //header
import {MatIconModule} from '@angular/material/icon'; //icon
import {MatButtonModule} from '@angular/material/button'; //buttons
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component'; //dialog
import {MatFormFieldModule} from '@angular/material/form-field';
import { TeamDetailComponent } from './dialog/team-detail/team-detail.component';
import {MatTableModule} from '@angular/material/table';
import { PointsTableComponent } from './points-table/points-table.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
@NgModule({
  declarations: [
    AppComponent,
    TeamDetailComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    DialogComponent,
    MatTableModule,
    PointsTableComponent,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
