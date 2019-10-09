import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../../config';
import { User } from '../models/user';



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

 updateUser(id, usuario:User){
    console.log('id: '+ id, 'usuario: ' +Object.values(usuario[0])); 
    return this.http.put<User>(`${config.apiUrl}user/${id}`, usuario[0]);
 }
}