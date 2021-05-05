import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./pages/main/main.component";
import { UserGuard } from "./user.guard";

const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [UserGuard]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {

}
