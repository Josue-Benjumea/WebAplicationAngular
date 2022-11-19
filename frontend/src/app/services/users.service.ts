import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
  
})
export class UsersService {
  currentUser: User
  constructor(private http: HttpClient, private cookies: CookieService, public router:Router) {
    this.currentUser = new User()
  }
  

  login(user: any): Observable<any> {
    return this.http.post('http://localhost:5000/product/singup', user);
  }

  decodeToken(): any {
    let token = localStorage.getItem('token');
    let decoded = jwtDecode(token || 'Error en token'); // retornar el payload del token
    return decoded;
  }

  logOut(){
    localStorage.removeItem("token")
    this.router.navigate(['/login'])
    this.currentUser = new User()
    return
  }

  isLoggedIn() {
    let token = localStorage.getItem('token') || false;

    if (token) {
      return true;
    }

    return false;
  }

  isAdmin() {
    let token = localStorage.getItem('token') || false;

    if (token) {
      let decodedToken: any = this.decodeToken();

      if (decodedToken.isAdmin) {
        return true;
      }
    }

    return false;
  }

  setToken(token: string) {
    this.cookies.set('token', token);
  }
  getToken() {
    return this.cookies.get('token');
  }

}
