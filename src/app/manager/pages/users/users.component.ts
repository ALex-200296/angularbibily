import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';
import {IManagerUsers} from '../../interface/manager';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users!: IManagerUsers[];
  constructor
  (
    private managerService: ManagerService
  ) { }

  ngOnInit(): void {
    this.managerService.users()
    .subscribe
    (
      (response: any) =>
      {
        this.users = response.data
      },
      error =>
      {
        console.log(error)
      }
    )
  }

  delete(id: number) {
    const bol: boolean = confirm('Вы уверены');
    if(bol) {
      this.managerService.userDelete(id)
        .subscribe
        (
          response =>
          {
            this.managerService.users()
              .subscribe
              (
                (response: any) =>
                this.users = response.data
              )
          },
          error =>
          {
            console.log(error)
          }
        )
    }
  }
}
