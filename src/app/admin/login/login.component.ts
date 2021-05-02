import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { AdminService } from '../admin.service';
import { Ilogin } from '../interface/admin'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: boolean = false;
  form: FormGroup = new FormGroup({
    login: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ])
  })

  constructor
  (
    private adminService: AdminService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit() {
    const data = this.form.getRawValue()

    if(this.form.invalid) {
      console.log('ошибка авторизации');
      return
    }

    this.adminService.login(data)
      .subscribe
      (
        (response: any) =>
        {
          if(response.position === 'admin') {
            this.auth.setToken(response.token, response.position);
            this.router.navigate(['projectadmin/main']);
            return
          }

          this.error = false;
          this.router.navigate(['']);
        },
        (error: any) =>
        {
          console.log(error)
          this.error = true;
        }
      )
  }

}
