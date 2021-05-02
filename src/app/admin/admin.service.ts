import { Injectable } from "@angular/core";
import { Ilogin, IRestaurants, ITables } from './interface/admin'
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class AdminService {
  url: string = environment.url

  constructor(
    private http: HttpClient
  ) {

  }


  login(data: Ilogin) {
    return this.http.post(`${this.url}admin/login`, data);
  }

  logout() {
    return this.http.get(`${this.url}admin/logout`);
  }

  getRestaurantId() {
    return this.http.get(`${this.url}admin/restaurant`);
  }

  getTables() {
    return this.http.get(`${this.url}admin/tables/all`);
  }

  createRestaurant (data: IRestaurants) {
    return this.http.post(`${this.url}admin/restaurant/create`, data)
  }
  createTable (data: ITables) {
    return this.http.post(`${this.url}admin/table/create`, data)
  }
}
