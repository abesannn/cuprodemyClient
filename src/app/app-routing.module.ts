import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditAdminComponent } from './component/application/user/routed/admin/UserEditAdmin/user-edit-admin/user-edit-admin.component';
import { UserNewAdminComponent } from './component/application/user/routed/admin/UserNewAdmin/user-new-admin/user-new-admin.component';
import { UserPlistAdminComponent } from './component/application/user/routed/admin/UserPlistAdmin/UserPlistAdmin.component';
import { UserRemoveAdminComponent } from './component/application/user/routed/admin/UserRemoveAdmin/user-remove-admin/user-remove-admin.component';
import { UserViewAdminComponent } from './component/application/user/routed/admin/user-view-admin/user-view-admin.component';
import { HomeComponent } from './component/shared/routed/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin/user/plist', component: UserPlistAdminComponent },
  { path: 'admin/user/view/:id', component: UserViewAdminComponent },
  { path: 'admin/user/remove/:id', component: UserRemoveAdminComponent },
  { path: 'admin/user/edit/:id', component: UserEditAdminComponent },
  { path: 'admin/user/new', component: UserNewAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
