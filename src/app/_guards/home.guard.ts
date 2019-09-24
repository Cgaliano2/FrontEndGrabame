import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_Services/auth.service';

@Injectable({
    providedIn: 'root'
  })
export class HomeGuard implements CanActivate, CanLoad {

    constructor(private authService: AuthService, private router: Router){}
    canActivate() {
        return this.canLoad();
    }


    canLoad() {
        if (!this.authService.isLoggedIn()) {
          this.router.navigate(['/login']);
        }
        return this.authService.isLoggedIn();
      }
}


