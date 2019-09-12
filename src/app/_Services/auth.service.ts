import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {

    return this.http.post<any>('aqui va el URL', {username, password})
    .pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        localStorage.setItem('currentUSer', JSON.stringify(user));
      }

      return user;

    }));

  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
