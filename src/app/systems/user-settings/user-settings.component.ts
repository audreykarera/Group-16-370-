import { EditUserRoleComponent } from './edit-user-role/edit-user-role.component';
import { DeleteUserRoleComponent } from './delete-user-role/delete-user-role.component';
import { CreateUserRoleComponent } from './create-user-role/create-user-role.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { UserRole } from 'src/app/models/userRole';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { UserRoleService } from 'src/app/shared/services/user-role.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  userRoleList: UserRole[];
  userRole: UserRole;

  constructor(public dialog: MatDialog,
    private userRoleService: UserRoleService,
    private notificationService: NotificationsService,) { }

  ngOnInit(): void {
    this.readUserRoles()
  }

  readUserRoles() {
    this.userRoleService.getUserRoles().subscribe((res) => {
      this.userRoleList = res as UserRole[];
    }, (err: HttpErrorResponse) => {
      this.notificationService.failToaster("Unable to display employees", "Error");
    });
  }

  onDelete(id) {
    this.userRoleService.deleteUserRole(id).subscribe((res) => {
    });
    setTimeout(() => {
      window.location.reload();
    }, 10);
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
