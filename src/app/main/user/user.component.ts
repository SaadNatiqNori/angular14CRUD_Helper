import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  userService : any;
  constructor() {
    this.userService = new UserService();
    this.users = this.userService.getAllUsers();
  }

  ngOnInit(): void {
  }

}
