import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerRoutingModule } from './manager-routing.module';
import { MainComponent } from './pages/main/main.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth.interceptor';
import { ManagerService } from './manager.service';
import { LoginComponent } from '../components/login/login.component';
import { ManagerGuard } from './manager.guard';
import { AdminService } from '../admin/admin.service';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ShemaComponent } from './pages/shema/shema.component';
import { TbodyComponent } from './components/tbody/tbody.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersCreateComponent } from './pages/users-create/users-create.component';
import { UsersUpdateComponent } from './pages/users-update/users-update.component';
import { UsersDeleteComponent } from './pages/users-delete/users-delete.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    MainComponent,
    CalendarComponent,
    ShemaComponent,
    TbodyComponent,
    UsersComponent,
    UsersCreateComponent,
    UsersUpdateComponent,
    UsersDeleteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ManagerRoutingModule,
    HttpClientModule,
  ],
  providers: [
    INTERCEPTOR_PROVIDER,
    ManagerService,
    ManagerGuard,
  ]
})
export class ManagerModule { }
