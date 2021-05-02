import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Ilogin } from "../admin/interface/admin";
import { IShemaUser } from "./interface/user";


@Injectable()

export class UserService {
  private url: string = environment.url

  constructor
  (
    private http: HttpClient
  )  {}

  login(data:Ilogin) {
    return this.http.post(`${this.url}user/login`, data);
  }

  shemaUser(data: IShemaUser) {
   return this.http.post(`${this.url}shema/user`, data);
  }

}
