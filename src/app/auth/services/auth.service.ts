import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Auth } from '../models/auth.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth!: Auth | undefined;

  get Auth() {
    return{ ...this._auth};
  }
  constructor(private http: HttpClient) { }

  login() {
    return this.http.get<Auth>('http://localhost:3000/usuarios/1').pipe(
      tap(user => this._auth = user)
    );
  }
}
