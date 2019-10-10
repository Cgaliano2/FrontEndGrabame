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
 httpOptions = {
   headers: new HttpHeaders({
       'content-Type': 'application/json',
       Authorize: `Bearer ${localStorage.getItem('token')}`
   })
};

 getUsers(): Observable<any> {

    return this.http.get(`${config.apiUrl}users`);
 }

 getUserByRut(rut: string): Observable<any> {

    return this.http.get(`${config.apiUrl}user/${rut}`);
 }

 deleteUser(id: number) {
     return this.http.delete(`${config.apiUrl}user/${id}`);
 }

 updateUser(id: string, usuario: User): Observable<User> {

    console.log('id: ' + id, 'usuario: ' + usuario);
    return this.http.put<User>(`${config.apiUrl}user/${id}`, usuario, this.httpOptions);
 }
 getUserByName(term: string): Observable<any> {
console.log(term);
return this.http.get(`${config.apiUrl}user/${term}`);

}
}
