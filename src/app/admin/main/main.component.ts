import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor
  (
    private adminService: AdminService,
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.adminService.logout()
      .subscribe
      (
        (response: any) =>
        {
          console.log(response);
          this.auth.deleteToken();
          this.router.navigate(['']);
        },
        (error: any) =>
        {

        }
      )
  }
}
