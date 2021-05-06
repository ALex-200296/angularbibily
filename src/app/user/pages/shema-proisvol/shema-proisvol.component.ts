import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShema } from '../../interface/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-shema-proisvol',
  templateUrl: './shema-proisvol.component.html',
  styleUrls: ['./shema-proisvol.component.scss']
})
export class ShemaProisvolComponent implements OnInit {

  shemas!: IShema[];
  days:any = [];
  nights: any = [];
  time: boolean = true;
  shemaDays = new Map();
  shemaNight = new Map();
  time_of_day!: string;
  date!: string;
  constructor
  (
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    await this.route.params.subscribe( (route: any) => {
      this.date = route.date;
      this.time_of_day = route.time_of_day;
    })


    const date1 = new Date();
    const time = date1.getHours();
    // const time = 12;
    if(this.time_of_day === 'day') {
      this.time = true;
    }else {
      this.time = false;
    }

    this.userService.shemaUser({date: this.date})
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
