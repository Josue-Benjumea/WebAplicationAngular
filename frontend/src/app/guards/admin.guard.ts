import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(public router: Router, public usersService: UsersService) {}

  canActivate() {
    let token: any = localStorage.getItem("token") || '';

    if (token) {
      let { isAdmin }: any = this.usersService.decodeToken();
      console.log(isAdmin)
      console.log(this.usersService.decodeToken())
      if (isAdmin) {
        return true;
      }
    }
    alert("No tienes permisos administrativos")
    this.router.navigate(['/home']);
    return false;
  }
}
