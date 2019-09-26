import { Injectable, Injector} from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_Services/authentication.service';
import { config } from '../../config';



@Injectable()
export class JwInterceptor implements HttpInterceptor {
    constructor(private AuthService: AuthenticationService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
/*
        const currentUser = this.AuthService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.token;
        const isApiUrl = request.url.startsWith(this.AuthService.apiURL);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }*/
   /* const currentUser = this.AuthService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.token;
    const isApiUrl = request.url.startsWith(config.apiUrl);
    if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentUser.token}`
                }
            });

        }
    return next.handle(request);
    }*/

    const currentUser = this.AuthService.currentUserValue;

    if (currentUser && currentUser.token) {
        request = request.clone({
                setHeaders: {
                    Authorization: `${currentUser.token}`
                }
            });
        }
    return next.handle(request);
 }
}
