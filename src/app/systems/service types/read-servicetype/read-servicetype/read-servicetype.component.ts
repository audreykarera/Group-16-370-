// import { ServiceTypeService } from 'src/app/shared/services/service-type.service';
// import { HttpClient } from '@angular/common/http';

// import { DialogInterface } from './../../../../Interfaces/dialog.interface';
// import { EditServicetypeComponent } from './../../edit-servicetype/edit-servicetype/edit-servicetype.component';
// import { CreateServicetypeComponent } from './../../create-servicetypes/create-servicetype/create-servicetype.component';
// import { Component, OnInit } from '@angular/core';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { Router } from '@angular/router';
// import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';


// export class ServiceType{
//   constructor(
//     public serviceTypeName: string,
//     public serviceTypeDescription: string
//   ){
//   }  
// }

// @Component({
//   selector: 'app-read-servicetype',
//   templateUrl: './read-servicetype.component.html',
//   styleUrls: ['./read-servicetype.component.scss']
// })
// export class ReadServicetypeComponent implements OnInit {

//   servicetypes: ServiceType[];
//   serviceTypeList: ServiceType[];

//   constructor(
//     private serviceTypeService: ServiceTypeService,
//     public router: Router,
//     public dialog: MatDialog
//   ) { }


//   ngOnInit(): void {
//     this.readServiceTypes();
//   }

//   readServiceTypes(){
//     this.serviceTypeService.getServiceTypes().subscribe((res)=>{
//       this.serviceTypeList =res as ServiceType[];
//     })
//   }
//   onDelete(id){
//     this.serviceTypeService.deleteServiceType(id).subscribe((res)=>{
//       console.log(id);
//       this.readServiceTypes();
//     })
//   }

//   editServiceTypes(obj){
//     this.serviceTypeService.postServiceType(obj).subscribe((res)=>{
//       this.readServiceTypes()
//     })
//   }
//   routerAddServiceType() {
//     const dialogConfig = new MatDialogConfig();
//     dialogConfig.disableClose = true;
//     const dialogReference = this.dialog.open(
//       CreateServicetypeComponent, 
//       dialogConfig
//     );
//   }

//   routerEditServiceType() {
//     const dialogConfig = new MatDialogConfig();
//     dialogConfig.disableClose = true;
//     const dialogReference = this.dialog.open(
//       EditServicetypeComponent, 
//       dialogConfig
//     );

// }
// openDeleteDialog() {
//   const dialogInterface: DialogInterface = {
//     dialogHeader: 'Confirmation Message',
//     dialogContent: 'Are you sure you want to delete this?',
//     cancelButtonLabel: 'No',
//     confirmButtonLabel: 'Yes',
//     callbackMethod: () => {
     
//     },
//   };
//   this.dialog.open(SharedComponent, {
//     width: '300px',
//     data: dialogInterface,
//   });
// }

// }