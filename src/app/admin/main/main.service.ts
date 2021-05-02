import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Imanager } from "./Imain";

@Injectable()

export class MainService {
  private url: string = environment.url;

  constructor
  (
    private http: HttpClient
  ) {

  }
  register(data: Imanager, position: string = '') {
    if(position) {
      const request = {...data, position};
      return this.http.post(`${this.url}admin/register`, request);
    }
    return this.http.post(`${this.url}admin/register`, data);
  }

  usersAll () {
    return this.http.get(`${this.url}admin/users/all`);
  }
}
