import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ManagerService } from 'src/app/manager/manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loading: boolean = false;
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
    private managerService: ManagerService,
    private authService: AuthService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    if(this.auth.isAuthorization()) {
      if(localStorage.getItem('position') === 'manager') {
        this.router.navigate(['manager']);
      }
      if(localStorage.getItem('position') === 'employee') {
        this.router.navigate(['user'])
      }
    }
  }

  login() {
    const data = this.form.value;
    if(this.form.invalid) {
      return
    }
    this.loading = true;
    this.managerService.login(data)
      .subscribe
      (
       (response: any)=>
        {
          if(response.position === 'manager') {
            this.authService.setToken(response.token, response.position);
            this.loading = false;
            this.router.navigate(['manager']);
            return
          }
          if(response.position === 'employee') {
            this.authService.setToken(response.token, response.position)
            this.loading = false;
            this.router.navigate(['user']);
            return
          }
          this.loading = false;
          this.router.navigate(['']);
        },
        error =>
        {
          this.loading = false;
          console.log(error)
        }
      )
  }
}
