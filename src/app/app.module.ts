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
import { TeamDetailComponent } from './team-detail/team-detail.component';
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
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
