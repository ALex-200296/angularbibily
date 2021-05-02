import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRouting } from './main-routing.module';
import { AdminlteComponent } from './adminlte/adminlte.component';
import { AdminGuard } from '../admin.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/auth.interceptor';
import { MainService } from './main.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerCreateComponent } from '../components/manager-create/manager-create.component';
import { EmployeeCreateComponent } from '../components/employee-create/employee-create.component';
import { RestaurantCreateComponent } from '../components/restaurant-create/restaurant-create.component';
import { TableCreateComponent } from '../components/table-create/table-create.component';
import { TablesComponent } from '../components/tables/tables.component';
import { RestaurantsComponent } from '../components/restaurants/restaurants.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AdminlteComponent,
    ManagerCreateComponent,
    EmployeeCreateComponent,
    RestaurantCreateComponent,
    TableCreateComponent,
    RestaurantsComponent,
    TablesComponent,

  ],
  imports: [
    CommonModule,
    MainRouting,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AdminGuard,
    INTERCEPTOR_PROVIDER,
    MainService
  ]
})
export class MainModule { }
