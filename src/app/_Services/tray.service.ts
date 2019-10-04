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

// BANDEJAS
getTray(): Observable <any> {
    return this.http.get<any>(`${config.apiUrl}trays`);
}
SearchTray(id: string): Observable<any> {
    return this.http.get(`${config.apiUrl}tray/` + id);
}

SearchDate(date: string) {
    return this.http.get(`${config.apiUrl}trays/` + date);

}


getUbication(): Observable<any> {
    return this.http.get(`${config.apiUrl}trays/ubications`);
}

getByDateRange(term: string): Observable<any> {

    return this.http.get(`${config.apiUrl}trays/date/${term}`);
}
// Charts

getChartsMontly(): Observable<any> {
    return this.http.get<any>(`${config.apiUrl}charts/monthly`);
}

getChartYearly(): Observable<any> {

    return this.http.get(`${config.apiUrl}charts/yearly`);
}

getChartDaily(): Observable<any> {

    return this.http.get(`${config.apiUrl}charts/daily`);
}


getByBarcode(codigoQr: string) {

    return this.http.get(`${config.apiUrl}trays/code/${codigoQr}`);
}

}

