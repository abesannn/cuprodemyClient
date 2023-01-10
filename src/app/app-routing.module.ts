import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditAdminComponent } from './component/application/user/routed/admin/UserEditAdmin/user-edit-admin/user-edit-admin.component';
import { UserNewAdminComponent } from './component/application/user/routed/admin/UserNewAdmin/user-new-admin/user-new-admin.component';
import { UserPlistAdminComponent } from './component/application/user/routed/admin/UserPlistAdmin/UserPlistAdmin.component';
import { UserRemoveAdminComponent } from './component/application/user/routed/admin/UserRemoveAdmin/user-remove-admin/user-remove-admin.component';
import { UserViewAdminComponent } from './component/application/user/routed/admin/user-view-admin/user-view-admin.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';




const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'admin/user/plist', component: UserPlistAdminComponent, title: 'Plist usuarios' },
  { path: 'admin/user/view/:id', component: UserViewAdminComponent, title: 'Vista usuario' },
  { path: 'admin/user/remove/:id', component: UserRemoveAdminComponent, title: 'Borrar usuario' },
  { path: 'admin/user/edit/:id', component: UserEditAdminComponent, title: 'Editar usuario' },
  { path: 'admin/user/new', component: UserNewAdminComponent, title: 'Nuevo usuario' },
  { path: 'login', component: LoginComponent, title: 'Login'},
  { path: 'logout', component: LogoutComponent, title: 'Logout'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
