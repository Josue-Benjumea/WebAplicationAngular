export class User {
  firtsName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;

  constructor(
    firtsName = '',
    lastName = '',
    email = '',
    password = '',
    isAdmin = false
  ) {
    this.firtsName = firtsName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
  }
}
