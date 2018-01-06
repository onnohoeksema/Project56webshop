import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navmenu.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit {
    constructor(public nav: NavbarService) { }

    ngOnInit(): void {
        this.isLoggedIn();
    }

    isLoggedIn() {
        if (localStorage.getItem('currentUser')) {
            this.nav.show();
        }
        else {
            this.nav.hide();
        }
    }
}
