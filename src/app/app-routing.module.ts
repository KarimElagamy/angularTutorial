import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './Core/Guards/admin.guard';
import { LoginGuard } from './Core/Guards/login.guard';
import { HomeComponent } from './Public/home.component';
import { JobsComponent } from './Public/jobs.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Jobs", component: JobsComponent },
  { path: "Account", loadChildren: () => import("./Account/account.module").then(mod => mod.AccountModule) },
  { path: "User", loadChildren: () => import("./User/user.module").then(mod => mod.UserModule), canActivateChild: [LoginGuard] },
  { path: "Admin", loadChildren: () => import("./Admin/admin.module").then(mod => mod.AdminModule), canLoad: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
