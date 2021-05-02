import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.scss']
})
export class RestaurantCreateComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ])
  })
  constructor
  (
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create() {
    const data = this.form.value;
    this.adminService.createRestaurant(data)
      .subscribe
      (
        response =>
        {
          this.router.navigate(['projectadmin/main/restaurants/all'])
        },
        error =>
        {
          console.log(error)
        }
      )
  }

}
