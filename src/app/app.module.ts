import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Public/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobsComponent } from './Public/jobs.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtAdderInterceptor } from './Core/Interceptors/jwt-adder.interceptor';
import { LoginGuard } from './Core/Guards/login.guard';
import { AdminGuard } from './Core/Guards/admin.guard';
import { APIKeyAdderInterceptor } from './Core/Interceptors/apikey-adder.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtAdderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: APIKeyAdderInterceptor, multi: true },
    LoginGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
