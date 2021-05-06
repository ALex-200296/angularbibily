import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { UserGuard } from './user.guard';
import { AuthInterceptor } from '../auth.interceptor';
import { UserService } from './user.service';
import { HeaderComponent } from './pages/header/header.component';
import { OpacityDirective } from './directives/opacity.directive';
import { ShemaProisvolComponent } from './pages/shema-proisvol/shema-proisvol.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    OpacityDirective,
    ShemaProisvolComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    UserGuard,
    INTERCEPTOR_PROVIDER,
    UserService
  ]
})
export class UserModule { }
