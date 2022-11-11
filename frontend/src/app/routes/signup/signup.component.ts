import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/users.model';
import { NgForm } from '@angular/forms';
import { last } from 'rxjs';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(  public userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    let response = this.userService.getUser();
    response.subscribe((res) => {
      this.userService.users = res;
      console.log(this.userService.users);
    });
  }

  createUsers(form: NgForm) {
    console.log(form.value);
    let { firtsName, lastName, email, password, isAdmin } = form.value;
    if (!firtsName || !lastName || !email || !password || !isAdmin)
      return alert('Llena todos los campos');

    let createuser = this.userService
      .createUser(form.value)
      .subscribe((res) => {
        this.getAllUsers();
        alert(res);
      },
      error =>{
        Swal.fire({
          icon: 'error',
          title: error.error,
          text: 'Something went wrong!',
          
        })
       
      })
      
      
  }

}
