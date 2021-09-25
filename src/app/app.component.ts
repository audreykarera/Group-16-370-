import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Green future Solutions';
  sideBarOpen = true;
  userLogin = true; 
  x = false;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
