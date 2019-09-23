import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})

export class UserService {
apiURL='http://api-grbm.herokuapp.com';
constructor(private http: HttpClient){}

//opciones Http
httpOptions = {
    headers: new HttpHeaders({
        'content-Type': 'application/json'
    })
}

    getAll() {
        return this.http.get<User[]>(`${this.apiURL}/users`);
    }

    getById(id: number) {
        return this.http.get(`${this.apiURL}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${this.apiURL}/user`, user);
    }

    update(user: User) {
        return this.http.put(`${this.apiURL}/users/` + user._id, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiURL}/users/` + id);
    }
}