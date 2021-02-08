import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { ServicesComponent } from './page/services/services.component';
// import {LoginComponent} from './page/login/login.component'
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { from } from 'rxjs';
import { LoginComponent } from './page/login/login.component';
import { CousreComponent } from './page/cousre/cousre.component';
import { DetailComponent } from './page/detail/detail.component';
import { RegisterComponent } from './page/register/register.component';
import { InforComponent } from './page/infor/infor.component';

import { AuthGuard } from './_helpers';
import { AdminComponent } from './page/admin/admin.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'contact',
        component: ContactComponent,
        canActivate: [AuthGuard],
      },
      { path: 'info', component: InforComponent, canActivate: [AuthGuard] },
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
      {
        path: 'service',
        component: ServicesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'course',
        component: CousreComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'detail-course/:id',
        component: DetailComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
