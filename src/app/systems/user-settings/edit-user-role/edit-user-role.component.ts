import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';
import { UserRole } from 'src/app/models/userRole';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { UserRoleService } from 'src/app/shared/services/user-role.service';

@Component({
  selector: 'app-edit-user-role',
  templateUrl: './edit-user-role.component.html',
  styleUrls: ['./edit-user-role.component.scss']
})
export class EditUserRoleComponent implements OnInit {
  userRole: UserRole;
  constructor(public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
    private notificationService: NotificationsService, 
    private userRoleService: UserRoleService,) { }
  
  ngOnInit(): void {
    this.refreshForm();
  }
  
  Close(){
    this.dialog.closeAll();
  }

  onSave(){
    this.userRoleService.patchUserRole(this.userRole).subscribe((res)=>{
      this.userRole = res as UserRole; 
    });
    this.Close();
    this.notificationService.successToaster("Successfully saved user role", "Success");
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

