import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./pages/main/main.component";
import { ShemaProisvolComponent } from "./pages/shema-proisvol/shema-proisvol.component";
import { UserGuard } from "./user.guard";

const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [UserGuard]},
  {path: 'proisvol/:date/:time_of_day', component: ShemaProisvolComponent, canActivate: [UserGuard]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {

}
