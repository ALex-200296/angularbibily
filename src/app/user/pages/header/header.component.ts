import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor
  (
    public auth: AuthService,
    private adminService: AdminService,
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
