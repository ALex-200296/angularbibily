import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagerService } from './manager/manager.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ManagerGuard } from './manager/manager.guard';
import { AdminService } from './admin/admin.service';
import { AuthInterceptor } from './auth.interceptor';
import { UserLoginComponent } from './user/pages/login/login.component';
import { UserService } from './user/user.service';
import { UserGuard } from './user/user.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    ManagerComponent,
    UserComponent,
    NotfoundComponent,
    MainComponent,
    LoginComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately'
      // registerWhenStable:30000
      // registerImmediately
    })
  ],
  providers: [
    ManagerService,
    ManagerGuard,
    AdminService,
    UserService,
    INTERCEPTOR_PROVIDER,
    UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
