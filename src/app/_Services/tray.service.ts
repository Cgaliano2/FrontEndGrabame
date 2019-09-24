import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Tray } from '../models/tray';

@Injectable({
    providedIn: 'root'
})

export class TrayServices {
apiURL = 'http://api-grbm.herokuapp.com/';
constructor(private http: HttpClient) {}
// opciones Http
httpOptions = {
    headers: new HttpHeaders({
        'content-Type': 'application/json'
    })
};
// obtener Bandejas de la aplicación
getTray(): Observable <any> {
    return this.http.get<any>(this.apiURL + 'trays').pipe(
        retry(1),
        catchError(this.handleError));
}
SearchTray(id: string): Observable<any> {
    return this.http.get(this.apiURL + 'tray/' + id).pipe(
        retry(1),
        catchError(this.handleError)
    );
}

SearchDate(date: string): Observable<any> {
    return this.http.get(this.apiURL + 'trays/' + date).pipe(
        retry(1),
        catchError(this.handleError)
    );

}
getCharts(): Observable<any> {
    return this.http.get<any>(this.apiURL + 'charts').pipe(
        retry(1),
        catchError(this.handleError)
    );
}

/*
//capturar imagenes
getImagesTray():Observable <any> {
    return this.http.get<any>(this.apiURL + '/images/').pipe(
        retry(1),
        catchError(this.handleError)
    );
}
*/
/*
//capturar imagen
getImageTray(id): Observable<Tray> {
    return this.http.get<Tray>(this.apiURL + '/image/' + id)
    .pipe(
        retry(1),
        catchError(this.handleError)
    );
}

*/

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

