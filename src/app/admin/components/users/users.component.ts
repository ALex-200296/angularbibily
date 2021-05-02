import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../main/Imain';
import { MainService } from '../../main/main.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  managers!: Iusers[];
  employees!: Iusers[];

  constructor
  (
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.usersAll()
      .subscribe
      (
        (response: any) =>
        {
          this.managers = response.managers;
          this.employees = response.employees;
        },
        (error: any) =>
        {
          console.log(error)
        }
      )
  }

}
