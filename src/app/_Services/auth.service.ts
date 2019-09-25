import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, mapTo } from 'rxjs/operators';
import { User } from '../models/user';
import { isNullOrUndefined } from 'util';
import { of, Observable } from 'rxjs';
import { Tokens } from '../models/tokens';






@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'token';
  private loggedUser: string;
  apiURL = 'http://api-grbm.herokuapp.com';
  constructor(private http: HttpClient) { }
// opciones Http
httpOptions = {
  headers: new HttpHeaders({
      'content-Type': 'application/json'
  })
};
register(user: User) {
  return this.http.post(`${this.apiURL}/user`, user);
}
login(user: { rut: string, password: string }): Observable<boolean> {
  return this.http.post<any>(`${this.apiURL}/login`, user)
    .pipe(
      tap(token => this.doLoginUser(user.rut, token)),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  
}

logout() {
  return this.http.post<any>(`${this.apiURL}/logout`, {
    'removeTokens': this.removeTokens()
  }).pipe(
    tap(() => this.doLogoutUser()),
    mapTo(true),
    catchError(error => {
      alert(error.error);
      return of(false);
    }));
}

  getCurrentUSer(): User {
    let user_string = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(user_string)) {
      const user: User = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  getJwtToken(){
    return localStorage.getItem(this.JWT_TOKEN);
  }


  private doLoginUser(rut:string, tokens: Tokens)
  {
    this.loggedUser = rut;
    this.storeTokens(tokens);
  }


  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);


  }
  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

}
