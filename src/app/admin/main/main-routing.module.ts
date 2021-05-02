import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "../admin.guard";
import { EmployeeCreateComponent } from "../components/employee-create/employee-create.component";
import { ManagerCreateComponent } from "../components/manager-create/manager-create.component";
import { RestaurantCreateComponent } from "../components/restaurant-create/restaurant-create.component";
import { RestaurantsComponent } from "../components/restaurants/restaurants.component";
import { TableCreateComponent } from "../components/table-create/table-create.component";
import { TablesComponent } from "../components/tables/tables.component";
import { UsersComponent } from "../components/users/users.component";
import { AdminlteComponent } from "./adminlte/adminlte.component";

const routes: Routes = [
  { path: '', component: AdminlteComponent, canActivate: [AdminGuard]},
  { path: 'employee/create', component: EmployeeCreateComponent, canActivate: [AdminGuard]},
  { path: 'manager/create', component: ManagerCreateComponent, canActivate: [AdminGuard]},
  { path: 'users/all', component: UsersComponent, canActivate: [AdminGuard] },
  { path: 'tables/all', component: TablesComponent, canActivate: [AdminGuard] },
  { path: 'restaurants/all', component: RestaurantsComponent, canActivate: [AdminGuard] },
  { path: 'restaurants/create', component: RestaurantCreateComponent, canActivate: [AdminGuard]},
  { path: 'tables/create', component: TableCreateComponent, canActivate: [AdminGuard] },
]

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MainRouting {

}
