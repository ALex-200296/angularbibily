import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  bol_menu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.bol_menu = !this.bol_menu;
  }
}
