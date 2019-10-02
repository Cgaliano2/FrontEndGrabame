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

SearchDate(date: string){
    return this.http.get(`${config.apiUrl}trays/` + date);

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

getByDateRange(term:string):Observable<any>
{
    return this.http.get(`${config.apiUrl}trays/date/${term}`);
}



// Manejo de Errores
handleError(error) {
    let errorMessage = 'invalid action!';
    if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
    } else {
        errorMessage = `${error.error.text}`;
        // errorMessage = `Error Numero ${error.status}\nMessage:${error.message}`;

    }
    return throwError(errorMessage);
}
}

