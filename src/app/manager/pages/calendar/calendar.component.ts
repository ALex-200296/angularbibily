import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  errors!: string;

  day: boolean = true;
  form: FormGroup = new FormGroup({
    date: new FormControl('', [
      Validators.required
    ]),
  })
  constructor
  (
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  create() {
   const dateNow = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
   const dateNowParse = Date.parse(dateNow);
   const dateCreateParse = Date.parse(this.form.value.date);
   const day: string = this.day === true ? 'day' : 'night';
    if(this.form.invalid) {
      return
    }
    if(dateNowParse > dateCreateParse) {

      this.errors = 'Зачем тебе прошлая дата, попробуй снова'
      return
    }

    this.router.navigate([`manager/shema/${this.form.value.date}/${day}`])
  }

}
