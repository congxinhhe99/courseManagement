import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ServicesComponent } from './page/services/services.component';
import { ContactComponent } from './page/contact/contact.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { LoginComponent } from './page/login/login.component';
import { CousreComponent } from './page/cousre/cousre.component';
import { DetailComponent } from './page/detail/detail.component';
import { RegisterComponent } from './page/register/register.component';
import { InforComponent } from './page/infor/infor.component';
import { from } from 'rxjs';


// import { LoginComponent } from './page/login/login.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AdminComponent } from './page/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    DefaultLayoutComponent,
    LoginComponent,
    CousreComponent,
    DetailComponent,
    RegisterComponent,
    InforComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent],
})
export class AppModule {}
