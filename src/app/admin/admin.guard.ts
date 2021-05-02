import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable()

export class AdminGuard implements CanActivate {

  constructor
  (
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isAuthorization()) {
        if(localStorage.getItem('position') === 'admin') {
          return true;
        }
        this.router.navigate([''])
        return false
      }else {
        this.router.navigate([''])
        return false
      }
  }
}
