import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { IRestaurants } from '../../interface/admin';

@Component({
  selector: 'app-table-create',
  templateUrl: './table-create.component.html',
  styleUrls: ['./table-create.component.scss']
})
export class TableCreateComponent implements OnInit {

  restaurants!: IRestaurants[];
  form: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    restaurant_id: new FormControl('', [
      Validators.required
    ])
  })
  constructor
  (
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminService.getRestaurantId()
    .subscribe
    (
      ( response: any ) =>
      {
        this.restaurants = response.data
        console.log(this.restaurants)
      }
    )
  }

  create () {
    const data = this.form.value;
    console.log(data)
    if(this.form.invalid) {
      return
    }
    this.adminService.createTable(data)
      .subscribe
      (
        response =>
        {
          this.router.navigate(['projectadmin/main/tables/all'])
        },
        error =>
        {
          console.log(error)
        }
      )
  }

}
