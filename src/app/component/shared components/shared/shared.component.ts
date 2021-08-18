
import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SharedComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: DialogInterface,
    public stateService: DialogService
  ) { }

  ngOnInit(): void {
  }

  
}
