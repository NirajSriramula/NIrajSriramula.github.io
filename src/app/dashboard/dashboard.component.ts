import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FriendsDialogComponent } from '../friends-dialog/friends-dialog.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public dialog: MatDialog){}
  selectUser(): void{
    this.dialog.open(FriendsDialogComponent);
  }
}
