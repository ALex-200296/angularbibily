import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class UserLoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    login: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  })
  constructor
  (
    private userService: UserService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    const data = this.form.value;
    if(this.form.invalid) {
      return
    }
    this.userService.login(data)
      .subscribe
      (
        (response: any) =>
        {
          if(response.position === 'admin') {
            return
          }
          this.auth.setToken(response.token, response.position);
          if(response.position === 'manager') {
            this.router.navigate(['manager']);
          }
          this.router.navigate(['user']);
        },
        error =>
        {
          console.log(error)
        }
      )
    console.log(this.form.value)
  }

}
