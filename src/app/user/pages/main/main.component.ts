import { Component, OnInit } from '@angular/core';
import { IShema } from '../../interface/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  shemas!: IShema[];
  days:any = [];
  nights: any = [];
  time: boolean = true;
  shemaDays = new Map();
  shemaNight = new Map();
  constructor
  (
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const date1 = new Date();
    const time = date1.getHours();
    // const time = 16;
    if(5 < time && time < 16 ) {
      this.time = true;
    }else {
      this.time = false;
    }
    const month =  ("0" + (date1.getMonth()+1)).slice(-2);
    const getDate =  ("0" + (date1.getDate())).slice(-2);
    const date = `${date1.getFullYear()}-${month}-${getDate}`;
    this.userService.shemaUser({date: date})
      .subscribe
      (
        (response: any)=>
        {

          response.data.forEach(( element: any ) => {
            if(element.time_of_day === 'day') {
              this.days.push(element);
              this.shemaDays.set(`d${element.table}`, element.user);
            }
            if(element.time_of_day === 'night') {
              this.nights.push(element);
              this.shemaNight.set(`n${element.table}`, element.user)
            }
          });
          this.shemas = response.data;

        },
        error =>
        {
          console.log(error)
        }
      )
  }

}
