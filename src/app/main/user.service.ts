import { Injectable } from '@angular/core';
import { User } from './../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : User[] = [];
  constructor() {
    this.getAllUsers();
  }
  getAllUsers(){
    this.users = [
      new User(1, "Saad Natiq Nori", 23, "male"),
      new User(2, "Sarezh Ahmed", 29, "female"),
      new User(3, "Azad Moahmmed", 43, "male"),
      new User(4, "Younis Mahmood", 10, "male"),
      new User(5, "Sara Ahmed", 68, "female"),
      new User(6, "Mazn Maaroof", 37, "male"),
      new User(7, "Ali Saad", 86, "male"),
      new User(8, "Mohammed Ahmed", 5, "male"),
    ];
    return this.users;
  };
  getOneUser(id: number){
    var result = this.users.filter((user) => {
      return user.id === id;
    });
    return result;
  };
}
