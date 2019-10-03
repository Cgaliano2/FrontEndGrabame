import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { AuthenticationService } from '../_Services/authentication.service';





@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private AuthService: AuthenticationService){}
    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(err =>{
            if(err.status===401){
                this.AuthService.logout();
                const error = err.error.message || err.statusText;
                return throwError(error);
            }
            else if(err.status==400)
            {
                const error = err.error;
                return throwError(error);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}