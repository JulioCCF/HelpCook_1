import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelpCook';
  opened = false;
  expanded = false;
  constructor(){
    
  }

  toggleSidenav() {
    this.expanded = !this.expanded;
  }
}
