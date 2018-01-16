import { Inject, Component, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit {
    public loggedInUser: boolean;
    public loggedInAd: boolean;
    constructor(@Inject(PLATFORM_ID) private platformId: string) { }

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.loggedIn();
        }
    }

    loggedIn() {
        if (localStorage.getItem('currentUser')) {
            this.loggedInUser = true;
        }
        else if (localStorage.getItem('currentAdmin')) {
            this.loggedInAd = true;
        }
    }
}
