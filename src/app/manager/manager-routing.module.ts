import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManagerGuard } from "./manager.guard";
import { CalendarComponent } from "./pages/calendar/calendar.component";
import { MainComponent } from "./pages/main/main.component";
import { ShemaComponent } from "./pages/shema/shema.component";
import { UsersCreateComponent } from "./pages/users-create/users-create.component";
import { UsersComponent } from "./pages/users/users.component";

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [ManagerGuard]},
  { path: 'calendar', component: CalendarComponent, canActivate: [ManagerGuard]},
  { path: 'shema/:date/:day', component: ShemaComponent, canActivate: [ManagerGuard] },
  { path: 'users/all', component: UsersComponent, canActivate: [ManagerGuard] },
  { path: 'user/create', component: UsersCreateComponent, canActivate: [ManagerGuard] },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ManagerRoutingModule {

}
