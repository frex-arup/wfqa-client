import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.userService.getSessionUser;
        if (user) {
            const currentUrl = this.getConfiguredUrl(route);
            if (currentUrl.startsWith(user.role)) {
                return true;
            } else {
                this.router.navigate(['/401']);
                return false;
            }
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

    getConfiguredUrl(route: ActivatedRouteSnapshot) {
        return route.pathFromRoot.filter(v => v.routeConfig)
            .map(v => v.routeConfig.path)
            .join('/').replace(/\/\/+/g, '/').split(':')[0];
    }
}