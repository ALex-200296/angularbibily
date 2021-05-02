import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { MainService } from '../../main/main.service';

@Component({
  selector: 'app-manager-create',
  templateUrl: './manager-create.component.html',
  styleUrls: ['./manager-create.component.scss']
})
export class ManagerCreateComponent implements OnInit {
  restaurants: Array<any> =[];
  private position: string = 'manager';

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    restaurant_id: new FormControl('', [Validators.required])
  })
  constructor
  (
    private mainService: MainService,
    private AdminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.AdminService.getRestaurantId()
      .subscribe
      (
        ( response: any ) =>
        {
          this.restaurants = response.data
        }
      )
  }

  create() {
    const data = this.form.getRawValue();
    if(this.form.invalid) {
      return
    }
    this.mainService.register(data, this.position)
      .subscribe
      (
        response =>
        {
          this.form.reset();
          this.router.navigate(['projectadmin/main/users/all']);
        },
        error =>
        {
          this.form.reset()
          console.log(error)
        }
      )
  }
}
