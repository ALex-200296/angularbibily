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

  btn_boolean_add: boolean = false;
  input_boolean_add: boolean = false;
  date!: string;
  time_of_day!: string;
  resUsTal!: IResUsTab[];

  tables!: ITables[];
  users!: IManagerUsers[];
  user_id!: number | null;
  arr_tables = [];
  list_tables: ITables[] = [];
  search: string = '';

  error_user!: string;
  error_table!: string;

  constructor
  (
    private managerService: ManagerService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit(): Promise<void> {
    this.renewal()
  }

  private async renewal() {
    await this.route.params.subscribe( (route: any) => {

      this.date = route.date;
      this.time_of_day = route.day;

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
    await this.managerService.users()
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
        this.tables = response.data.filter( (arr:any) => {
         const data = this.resUsTal.find( (element) => {
            return element.table_id === arr.id
         })
         if(data) {
          this.list_tables.push(arr);
         }

         if(!data) {
           return arr;
         }
        })
        this.btn_boolean_add = false;
        this.input_boolean_add = false;
      },
      error =>
      {
        console.log(error)
      }
    )
  }

  add() {

    if(!this.user_id) {
      this.error_user = 'Выберите официанта'
      return
    }
    if(!this.arr_tables.length) {
      this.error_table = 'Выберите стол/столы'
      return
    }
    this.btn_boolean_add = true;
    this.input_boolean_add = true;

    const data: IResUsTab = {
      user_id: +this.user_id,
      date: this.date,
      table_id: this.arr_tables,
      time_of_day: this.time_of_day,
    }
    this.error_user = '';
    this.error_table = '';
    console.log(data.table_id)
    this.managerService.resUsTabCreate(data)
    .pipe(

    )
      .subscribe
      (
        response =>
        {
          this.list_tables = [];
          this.user_id = null;
          this.arr_tables = [];
          this.renewal();
        },
        error =>
        {
          this.btn_boolean_add = false;
          console.log(error)
        }
      )

  }
}
