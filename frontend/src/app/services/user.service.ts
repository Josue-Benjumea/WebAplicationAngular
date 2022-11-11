import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL_API = 'http://localhost:5000/users';
  users: any;
  currentUser: User;

  constructor(public http: HttpClient) {
    this.currentUser = new User();
  }

  getUser() {
    return this.http.get(`${this.URL_API}/get-all-users`);
  }

  createUser(data: User) {
    return this.http.post(`${this.URL_API}/create-user`, data);
  }
}
