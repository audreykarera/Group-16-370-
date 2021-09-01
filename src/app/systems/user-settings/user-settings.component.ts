import { UserRole } from './../../models/userRole';
import { EditUserRoleComponent } from './edit-user-role/edit-user-role.component';
import { DeleteUserRoleComponent } from './delete-user-role/delete-user-role.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { UserRoleService } from 'src/app/shared/services/user-role.service';
import { CreateUserRoleComponent } from './create-user-role/create-user-role.component';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  userRoleList: UserRole[];
  userRole: UserRole;


  constructor(
    public dialog: MatDialog) { }

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
  routeredituserrole(userRoleId: number, userRoleName: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditUserRoleComponent,
      {
        data: {
          userRoleId,
          userRoleName
        }
      }
    );
  }
}
