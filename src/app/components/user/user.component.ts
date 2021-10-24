import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Users } from '../../model/User';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users!: Users[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  updateDisableUser(user: any) {
    user.disabled = !user.disabled;
  }
}
