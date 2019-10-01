import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { config } from '../../config';
import { Ubication } from '../models/ubication';




@Injectable({
    providedIn: 'root'
})

export class TrayServices {
constructor(private http: HttpClient) {}
/*
// opciones Http
httpOptions = {
    headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorize: `Bearer ${localStorage.getItem('token')}`
    })
};*/

// obtener Bandejas de la aplicación
getTray(): Observable <any> {
    return this.http.get<any>(`${config.apiUrl}trays`).pipe(
        retry(1),
        catchError(this.handleError));
}
SearchTray(id: string): Observable<any> {
    return this.http.get(`${config.apiUrl}tray/` + id).pipe(
        retry(1),
        catchError(this.handleError)
    );
}

SearchDate(date: string): Observable<any> {
    return this.http.get(`${config.apiUrl}trays/` + date).pipe(
        retry(1),
        catchError(this.handleError)
    );

}
getCharts(): Observable<any> {
    return this.http.get<any>(`${config.apiUrl}charts`).pipe(
        retry(1),
        catchError(this.handleError)
    );
}

getUbication(): Observable<any> {
    return this.http.get(`${config.apiUrl}trays/ubications`).pipe(
        retry(1),
        catchError(this.handleError)
    );
}

getByDateRange(dateRange:string)
{
    return this.http.get(`${config.apiUrl}trays/${dateRange}`);
}



// Manejo de Errores
handleError(error) {
    let errorMessage = 'invalid action!';
    if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
    } else {
        errorMessage = `Error Numero ${error.status}\nSu peticion es invalida o no se encuentra en nuestros registros`;
        // errorMessage = `Error Numero ${error.status}\nMessage:${error.message}`;

    }
    window.alert(errorMessage);
    return throwError(errorMessage);
}
}

