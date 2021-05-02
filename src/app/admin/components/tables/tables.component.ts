import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ITables } from '../../interface/admin';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  tables!: ITables[];
  constructor
  (
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getTables()
      .subscribe
      (
        (response: any) =>
        {
          this.tables = response.data
          console.log(this.tables)
        },
        error =>
        {
          console.log(error)
        }
      )
  }

}
