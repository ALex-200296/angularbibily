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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    const data = this.form.value;
    if(this.form.invalid) {
      return
    }
    this.managerService.login(data)
      .subscribe
      (
       (response: any)=>
        {
          if(response.position === 'manager') {
            this.authService.setToken(response.token, response.position);
            this.router.navigate(['manager']);
            return
          }
          this.router.navigate(['']);
        },
        error =>
        {
          console.log(error)
        }
      )
  }
}
