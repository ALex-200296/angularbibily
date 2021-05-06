import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shema-proisvol',
  templateUrl: './shema-proisvol.component.html',
  styleUrls: ['./shema-proisvol.component.scss']
})
export class ShemaProisvolComponent implements OnInit {

  form: FormGroup = new FormGroup({
    date: new FormControl('', [
      Validators.required
    ]),
    day: new FormControl('', [
      Validators.required
    ])
  })
  constructor
  (
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  create() {

    if(this.form.invalid) {
      return
    }
    this.router.navigate([`user/proisvol/${this.form.value.date}/${this.form.value.day}`])
  }

}
