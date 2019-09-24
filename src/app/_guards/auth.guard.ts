import { Injectable } from '@angular/core';
import { CanActivate, CanLoad , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router, private Aservice: AuthService) { }

  canActivate() {
    if (this.Aservice.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    return !this.Aservice.isLoggedIn();
  }
}
