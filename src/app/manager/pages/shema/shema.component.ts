import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IManagerUsers, IResUsTab, ITables } from '../../interface/manager';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-shema',
  templateUrl: './shema.component.html',
  styleUrls: ['./shema.component.scss']
})
export class ShemaComponent implements OnInit {

  tables!: ITables[];
  users!: IManagerUsers[];
  resUsTal!: IResUsTab[];
  constructor
  (
    private managerService: ManagerService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {

    await this.route.params.subscribe( (route: any) => {
      this.managerService.resUsTab({date: route.date, time_of_day: route.day})
        .subscribe
        (
          (response: any) =>
          {
            this.resUsTal = response.data
          },
          error =>
          {
            console.log(error)
          }
        )
    })

    this.managerService.users()
    .subscribe
    (
      (response: any) =>
      {
        this.users = response.data;

      },
      error =>
      {
        console.log(error)
      }
    )
    await this.managerService.tables()
      .subscribe
      (
        (response: any) =>
        {

          this.tables = response.data.map( (arr:any) => {
           const data = this.resUsTal.find( (element) => {
              return element.table_id === arr.id
           })
           if(data) {
             return {...arr, exists: true};
           }
           return arr;
          })

        },
        error =>
        {
          console.log(error)
        }
      )
  }

}
