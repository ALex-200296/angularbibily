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

  }
}
