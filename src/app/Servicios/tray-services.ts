import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Tray } from '../components/shared/tray';

@Injectable({
    providedIn: 'root'
})

export class TrayServices {
apiURL='http://api-grbm.herokuapp.com';
constructor(private http: HttpClient) {}
//opciones Http
httpOptions = {
    headers: new HttpHeaders({
        'content-Type': 'application/json'
    })
}
//obtener Bandejas de la aplicación
getTray(): Observable <any> {
    return this.http.get<any>(this.apiURL + '/tray').pipe(
        retry(1),catchError(this.handleError));
}


getOneTray(Tray:Tray): Observable<Tray>{
 return this.http.get<Tray>(this.apiURL + '/tray/'+ `${Tray._id}`).pipe(
     retry(1), catchError(this.handleError));
}



//Manejo de Errores
handleError(error)
{
    let errorMessage = 'invalid action!';
    if (error.error instanceof ErrorEvent)
    {
        errorMessage = error.error.message;
    } else {
        errorMessage = `Error code: ${error.status}\nMessage:${error.message}`;

    }
    window.alert(errorMessage);
    return throwError(errorMessage);
}
} 

