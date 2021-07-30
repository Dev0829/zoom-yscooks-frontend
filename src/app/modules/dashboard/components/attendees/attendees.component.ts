import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../../shared/models/user.model';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.scss']
})
export class AttendeesComponent implements OnInit {

  public users: UserModel[] = [];

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers() {
    this.userService.getAllUsers().subscribe((data: any) => {
      console.log(data)
      this.users = data;
    })
  }
}
