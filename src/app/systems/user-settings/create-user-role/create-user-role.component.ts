import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRole } from 'src/app/models/userRole';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { UserRoleService } from 'src/app/shared/services/user-role.service';

@Component({
  selector: 'app-create-user-role',
  templateUrl: './create-user-role.component.html',
  styleUrls: ['./create-user-role.component.scss']
})
export class CreateUserRoleComponent implements OnInit {
  userRoleList: UserRole[]; 
  userRole: UserRole;

  constructor(public dialog: MatDialog, 
    private userRoleService: UserRoleService, 
    private notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.refreshForm()
  }
  
  Close(){
    this.dialog.closeAll();
  }

  onSave(){
    this.userRoleService.postUserRole(this.userRole).subscribe((res)=>{
      this.userRole = res as UserRole; //Again... Look at line 14 for the supplier we are referring to
    });
    this.Close();
    this.notificationService.successToaster("Successfully saved user role", "Error");
    setTimeout(()=>{
      window.location.reload();
    }, 1000);
  }

  refreshForm(){
    this.userRole = {
      UserRoleId: 0,
      UserRoleName: '',
    }
  }

}
