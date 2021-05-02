import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { MainService } from '../../main/main.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  private position: string = 'employee';
  restaurants: Array<any> =[];
  color: any = '#000000';
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    restaurant_id: new FormControl('', [Validators.required]),
  })
  constructor
  (
    private adminService: AdminService,
    private mainService: MainService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminService.getRestaurantId()
    .subscribe
    (
      ( response: any ) =>
      {
        this.restaurants = response.data
      }
    )
  }

  create() {
    if(this.form.invalid) {
    console.log('aформа не валидна')
     return
    }
    const data = {...this.form.value, color: this.color}
    this.mainService.register(data, this.position)
    .subscribe
    (
      response =>
      {
        this.form.reset()
        this.router.navigate(['projectadmin/main/users/all'])
      },
      error =>
      {
        this.form.reset()
        console.log(error)
      }
    )
  }
}
