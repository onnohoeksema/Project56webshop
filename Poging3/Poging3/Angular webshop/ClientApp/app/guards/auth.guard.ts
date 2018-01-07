import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor( @Inject(PLATFORM_ID) private platformId: string, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (isPlatformBrowser(this.platformId)) {
            if (localStorage.getItem('currentUser')) {
                // logged in so return true
                return true;
            }
            else {
                // not logged so return false
                this.router.navigate(['/LoginPage']);
                return false;
            }
        }


        // not logged so return false
        this.router.navigate(['/LoginPage']);
        return false;
    }
}