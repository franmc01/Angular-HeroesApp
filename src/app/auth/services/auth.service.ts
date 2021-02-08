import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth!: Auth | undefined;

  get Auth(): Auth {
    return { ...this._auth! };
  }
  constructor(private http: HttpClient) { }

  isAuthtenticated(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false)
    }

    return this.http.get<Auth>('http://localhost:3000/usuarios/1').pipe(
      map(auth => {
        if (auth) {
          this._auth = auth;
          return true
        } else {
          return false;
        }
      })
    )
  }

  login() {
    return this.http.get<Auth>('http://localhost:3000/usuarios/1').pipe(
      tap(user => this._auth = user),
      tap(user => localStorage.setItem('token', user.id)),
    );
  }

  logout() {

    this._auth = undefined;
  }
}
