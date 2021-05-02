import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interface/manager';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  user!: IUser;
  constructor
  (
    private managerService: ManagerService
  ) { }

  ngOnInit(): void {
    this.managerService.user()
    .subscribe
    (
      (response: any) =>
      {
        this.user = response.data
      },
      error =>
      {
        console.log(error)
      }
    )
  }

}
