import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { IRestaurants } from '../../interface/admin';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  restaurants!: IRestaurants[];
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getRestaurantId()
      .subscribe
      (
        (response: any) =>
        {
          this.restaurants = response.data
        },
        error =>
        {
          console.log(error)
        }
      )
  }

}
