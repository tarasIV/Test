import { Component } from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

items: MenuItem[];

ngOnInit() {
    this.items = [
        {label: 'Home', routerLink: ['/home'] },
        {label: 'About', routerLink: ['/about'] },
        {label: 'Hobbies', routerLink: ['/hobbies'] },
        {label: 'Contacts' },
        {label: 'Visited countries' }
    ];
  }
}