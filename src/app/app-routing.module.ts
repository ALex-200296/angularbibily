import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ManagerComponent } from './manager/manager.component';
import { ManagerGuard } from './manager/manager.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserLoginComponent } from './user/pages/login/login.component';
import { UserComponent } from './user/user.component';
import { UserGuard } from './user/user.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'projectadmin',
    component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule ),
  },
  {
    path: 'manager',
    component: ManagerComponent,
    loadChildren: () => import('./manager/manager.module').then( m => m.ManagerModule),
    canActivate: [ManagerGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () => import('./user/user.module').then( m => m.UserModule),
    canActivate: [UserGuard]
  },
  {
    path:'employee/login',
    component: UserLoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
