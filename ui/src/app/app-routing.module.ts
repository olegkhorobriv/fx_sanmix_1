import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "@sanmix/ui/@common/utils/auth.guard";
import {LayoutComponent} from "@sanmix/ui/@layout/layout/layout.component";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { DownloadComponent } from './download/download.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'users', component: UsersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'download', component: FileUploadComponent }
    ]
  }
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   canActivateChild: [AuthGuard],
  //   children: [
  //     {
  //       path: 'home',
  //       loadChildren: () =>
  //         import('./home/home.module').then((m) => m.HomeModule)
  //     },
  //     {
  //       path: '',
  //       pathMatch: 'full',
  //       redirectTo: 'home'
  //     },
  //   ]
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./auth/auth.module').then((m) => m.AuthModule)
  // },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'auth/login'
  // },
  // {
  //   path: '**',
  //   redirectTo: 'auth/login'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
