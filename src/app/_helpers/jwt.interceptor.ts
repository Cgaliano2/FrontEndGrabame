import { Injectable, Injector} from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_Services/authentication.service';
import { config } from '../../config';



@Injectable()


export class JwInterceptor implements HttpInterceptor {
    constructor(private AuthService: AuthenticationService, private injector: Injector) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const currentUser = this.AuthService.currentUserValue;
       
        if (currentUser && currentUser.token)
        {
            console.log(typeof currentUser.token)
            request = request.clone({
                setHeaders:{
                    authorization: `Bearer ${currentUser.token}`
                }
            });
           }
        return next.handle(request);
        }
}


   /*const currentUser = this.AuthService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.token;
        const isApiUrl = request.url.startsWith(config.apiUrl);
        if (isLoggedIn && isApiUrl)
        {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }*/
   /*const currentUser = this.AuthService.currentUserValue;
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
    /*const authService = this.injector.get(AuthenticationService);
    let currentUser = this.AuthService.currentUserValue;
    console.log(currentUser.token);
    console.log(request.url);
    let tokenized = request = request.clone({
                setHeaders: {
                    Authorization: `${authService.currentUserValue.token}`
                }
            });
    
    return next.handle(tokenized);

 }*/
 