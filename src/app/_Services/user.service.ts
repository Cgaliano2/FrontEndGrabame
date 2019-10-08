import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../../config';



@Injectable({
    providedIn: 'root'
})
export class UserService {
 constructor(private http: HttpClient) {}


 getUsers(): Observable<any>{

    return this.http.get(`${config.apiUrl}users`);
 }

 getUserByRut(rut: string): Observable<any> {

    return this.http.get(`${config.apiUrl}user/${rut}`);
 }

 deleteUser(rut) {
     return this.http.delete(`${config.apiUrl}/user/${rut}`)
 }

 updateUser(id, data): Observable<any> {
     return this.http.put(`${config.apiUrl}user/${id}`, data);
 }
}