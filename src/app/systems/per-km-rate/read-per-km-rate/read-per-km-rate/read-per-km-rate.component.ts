import { EditPerKmRateComponent } from './../../edit-per-km-rate/edit-per-km-rate/edit-per-km-rate.component';
import { CreatePerKmRateComponent } from './../../create-per-km-rate/create-per-km-rate/create-per-km-rate.component';
import { NotificationsService } from './../../../../shared/services/notifications.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PerKmRate } from './../../../../Interfaces/Index';
import { PerKmRateService } from './../../../../shared/services/per-km-rate.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-read-per-km-rate',
  templateUrl: './read-per-km-rate.component.html',
  styleUrls: ['./read-per-km-rate.component.scss']
})
export class ReadPerKmRateComponent implements OnInit {

  perkmRateList: PerKmRate[] = [];
  perkmRate$: Observable<PerKmRate[]> = this.perKmRateService.getPerKmRates();
  perkmRate: PerKmRate;

  displayedColumns: string[] = ['id', 'rate', 'distance', 'date','edit','delete'];
  public dataSource = new MatTableDataSource<any>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public dialog: MatDialog,
    private perKmRateService: PerKmRateService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.GetPerKmrates();
    this.refreshForm();
  }

  refreshForm() {
    this.perkmRate = {
      perKmRateId: 0,
      perKmRateAmount: 0,
      perKmRateDistance: 0,
      perKmRateDate: null
    }
  }

  Close() {
    this.dialog.closeAll();
  }

  GetPerKmrates() {
    this.perkmRate$.subscribe(res => {
      if (res) {
        this.perkmRateList = res;
        console.log(res);
      }
    });
  }

  DeletePerKmRate(id) {
    console.log(id);
    this.perKmRateService.DeletePerKmRate(id).subscribe((res) => {
      this.notificationsService.successToaster('Per Km Rate Deleted', 'Success');
      this.GetPerKmrates();
    });
  }

  routerAddPerKmRate() {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = { add: 'yes' };
    const dialogReference = this.dialog.open(
      CreatePerKmRateComponent,
      dialog
    );

    dialogReference.afterClosed().subscribe((res) => {
      if (res == 'add') {
        this.notificationsService.successToaster('Per Km Rate Added', 'Success');
        this.GetPerKmrates();
      }
    });
  }

  routerEditPerKmRate(perKmrateId: number, perKmRateAmount: number, perKmRateDistance: number, perKmRateDate: null) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.width = 'auto';
    dialog.height = 'auto';
    dialog.data = { add: 'yes' };
    const dialogReference = this.dialog.open(
      EditPerKmRateComponent,
      {
        data: { perKmrateId: perKmrateId, perKmRateAmount: perKmRateAmount, perKmRateDistance: perKmRateDistance, perKmRateDate: perKmRateDate }
      }
    );

    dialogReference.afterClosed().subscribe((res) => {
      if (res == 'add') {
        this.notificationsService.successToaster('Equipment Description editied', 'Success');
        this.GetPerKmrates();
      }
    });
  }

}
