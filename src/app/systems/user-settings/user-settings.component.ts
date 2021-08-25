import { EditUserRoleComponent } from './edit-user-role/edit-user-role.component';
import { DeleteUserRoleComponent } from './delete-user-role/delete-user-role.component';
import { CreateUserRoleComponent } from './create-user-role/create-user-role.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  routercreateuserrole() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateUserRoleComponent, 
      dialogConfig
    );
  }
  routerdeleteuserrole() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      DeleteUserRoleComponent, 
      dialogConfig
    );
  }
  routeredituserrole() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditUserRoleComponent, 
      dialogConfig
    );
  }
}
