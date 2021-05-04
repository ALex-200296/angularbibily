import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Ilogin } from "../admin/interface/admin";
import { IManagerUsers, IResUsTab, IResUsTabpost } from "./interface/manager";


@Injectable()

export class ManagerService {
  private url: string = environment.url;

  constructor(
    private http: HttpClient
  ) {

  }

  login(data: Ilogin) {
    return this.http.post(`${this.url}admin/login`, data);
  }

  userCreate(data: IManagerUsers) {
    data.login.trim().toLocaleLowerCase();
    return this.http.post(`${this.url}manager/user/create`, data);
  }

  userDelete(id: number) {
    return this.http.delete(`${this.url}manager/user/delete/${id}`);
  }

  user() {
    return this.http.get(`${this.url}manager/user`);
  }

  users() {
    return this.http.get(`${this.url}manager/users/all`);
  }

  tables() {
    return this.http.get(`${this.url}manager/tables/all`);
  }

  resUsTab(data: IResUsTabpost) {
    return this.http.post(`${this.url}manager/resustab`, data);
  }

  resUsTabCreate(data: IResUsTab) {
    return this.http.post(`${this.url}manager/resustab/create`, data);
  }
  resUsTabUpdate(data: IResUsTab) {
    return this.http.put(`${this.url}manager/resustab/update`, data);
  }


}
