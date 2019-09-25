import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, mapTo } from 'rxjs/operators';
import { User } from '../models/user';
import { isNullOrUndefined } from 'util';
import { of, Observable, BehaviorSubject } from 'rxjs';







@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject:BehaviorSubject<User>;
  public currentUser: Observable<User>;
  apiURL = 'http://api-grbm.herokuapp.com';
  // opciones Http
  /*httpOptions = {
    headers: new HttpHeaders({
        'content-Type': 'application/json'
    })
  };*/
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser =  this.currentUserSubject.asObservable();
   }
   register(user: User) {
    return this.http.post(`${this.apiURL}/user`, user);
  }
  public get currentUserValue(): User{
    return this.currentUserSubject.value;
  }


  login(rut: string, password: string){
    return this.http.post<any>(`${this.apiURL}/login`,{ rut, password }).
    pipe(map(user => {
      if (user && user.token) {
        console.log(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
      return user;
    }));
  }
  logout()
  {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
