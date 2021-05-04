import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IManagerUsers } from '../../interface/manager';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {

  color: string = 'black';
  loading:boolean = false;
  error_login: string = '';
  check_boolean: boolean = false;

  form: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    login: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
  })
  constructor
  (
    private managerService: ManagerService
  ) { }

  ngOnInit(): void {
  }


  create() {
    if(this.form.invalid) {
      return
    }
    const data_create: IManagerUsers = {
      ...this.form.value,
      login: this.form.value.login.trim().toLowerCase(),
      color: this.color};

    this.loading = true;

    this.managerService.users()
      .subscribe
      (
        (response: any) =>
        {
          const data = response.data.find( (user: any) =>
          {
            return user.login === this.form.value.login.trim().toLowerCase();
          })
          if(!data) {
            this.managerService.userCreate(data_create)
              .subscribe
              (
                response =>
                {
                  this.form.reset();
                  this.error_login = '';
                  this.loading = false;
                },
                error =>
                {
                  this.loading = false;
                  console.log(error)
                }
              )
          }
          if(data) {
            this.loading = false;
            this.form.reset();
            this.error_login = 'Логин занят, попробуйте снова'
          }
        },
        error =>
        {
          this.loading = false;
        }
      )
  }
}
