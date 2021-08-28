import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Clients } from 'src/app/Interfaces/dialog.interface';
import { ClientService } from '../client service/client.service';
import { ViewClientsComponent } from '../view-clients/view-clients/view-clients.component';

@Component({
  selector: 'app-read-clients',
  templateUrl: './read-clients.component.html',
  styleUrls: ['./read-clients.component.scss']
})
export class ReadClientsComponent implements OnInit {

  
  Clients: Clients[] = [];
  Clients$: Observable<Clients[]> = this.service.getClients();
  constructor(private service: ClientService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.Clients$.subscribe((res) => {
      console.log(res);
    });
  }
  

  routerViewClient() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      ViewClientsComponent, 
      dialogConfig
    );
  }

}
