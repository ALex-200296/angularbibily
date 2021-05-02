import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bibily';

  constructor
  (
    private auth: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    if(this.auth.isAuthorization()) {
      if(localStorage.getItem('position') === 'admin') {
        this.router.navigate(['projectadmin/main']);
      }
      if(localStorage.getItem('position') === 'manager') {
        this.router.navigate(['manager']);
      }
      if(localStorage.getItem('position') === 'employee') {
        this.router.navigate(['user'])
      }
    }
  }
}
