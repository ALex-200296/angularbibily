import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
import { AuthService } from '../auth.service';
import { IUser } from './interface/manager';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  constructor
  (
    public auth: AuthService,
    private adminService: AdminService,
    private router: Router,
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
