import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';
import { isNullOrUndefined } from 'util';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwsResponseI } from '../models/jws-response';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authSubject= new BehaviorSubject(false);
  private token:string;
  apiURL = 'http://api-grbm.herokuapp.com';
  constructor(private http: HttpClient) { }
// opciones Http
httpOptions = {
  headers: new HttpHeaders({
      'content-Type': 'application/json'
  })
};
register(user:User):Observable<JwsResponseI>{
  return this.http.post<JwsResponseI>(`${this.apiURL}/user`, user).
  pipe(tap((res:JwsResponseI)=>{
    if(res){
      //guardar token
      this.saveToken(res.dataUser.token);
    }
  }));
}

login(user:User):Observable<JwsResponseI>{
  return this.http.post<JwsResponseI>(`${this.apiURL}/login`, user).
  pipe(tap((res:JwsResponseI)=>{
    if(res){
      //guardar token
      this.saveToken(res.dataUser.token,);
    }
  }));
}

  

  getCurrentUSer(): User {
    let user_string = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(user_string)) {
      const user: User = JSON.parse(user_string);
      return user;
    }
    else {
      return null;
    }
  }
  logout() {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
  }

  private saveToken(token:string,):void{
    localStorage.setItem("ACCESS_TOKEN", token);
    this.token = token;
  }

  private getToken():string{
    if(!this.token)
    {
      this.token = localStorage.getItem("ACCESS_TOKEN")
    }
    return this.token
  }
}
