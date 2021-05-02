import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {

  color: string = 'black';
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
    const data = {...this.form.value, color: this.color};
    console.log(data)
    if(this.form.invalid) {
      return
    }

    this.managerService.userCreate(data)
      .subscribe
      (
        response =>
        {
          console.log(response)
        },
        error =>
        {
          console.log(error)
        }
      )
  }
}
