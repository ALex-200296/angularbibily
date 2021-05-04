import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITables } from 'src/app/admin/interface/admin';
import { IManagerUsers, IResUsTab } from '../../interface/manager';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-tbody',
  templateUrl: './tbody.component.html',
  styleUrls: ['./tbody.component.scss']
})
export class TbodyComponent implements OnInit {

  @Input() usersAll!: IManagerUsers[];
  @Input() table!: any;

  name!: string;
  user!: string;
  users!: IManagerUsers[];
  date!: string;
  time_of_day!: string;
  loading_btn: boolean = false;
  constructor
  (
    private route: ActivatedRoute,
    private managerService: ManagerService
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe
      (
        route =>
        {
          this.date = route.date
          this.time_of_day = route.day
        }
      )
  }

  update() {
    if(!this.name) {
      return
    }
    this.loading_btn = true;
    const data: IResUsTab = {
      user_id: +this.name,
      date: this.date,
      table_id: this.table.id,
      time_of_day: this.time_of_day,
    }
    this.managerService.resUsTabUpdate(data)
      .subscribe
      (
        response =>
        {
          this.name = '';
          this.loading_btn = false;
        },
        error =>
        {
          this.loading_btn = false;
          console.log(error)
        }
      )
  }
}
