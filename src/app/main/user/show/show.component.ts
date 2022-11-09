import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from './../../user.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  id: any;
  user: any;
  userService;

  constructor(private route: ActivatedRoute) {
    this.userService = new UserService();
  }

  //on mounted this page
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.user = this.userService.getOneUser(+this.id);
    });
  }

}
