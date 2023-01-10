import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService } from './service/User.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationService } from './service/pagination.service';
import { UserPlistAdminComponent } from './component/application/user/routed/admin/UserPlistAdmin/UserPlistAdmin.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './component/shared/unrouted/dropdown-register-page/dropdown-register-page.component';
import { UserDetailAdminUnroutedComponent } from './component/application/user/unrouted/admin/developer-detail-admin-unrouted/user-detail-admin-unrouted.component';
import { UserRemoveAdminComponent } from './component/application/user/routed/admin/UserRemoveAdmin/user-remove-admin/user-remove-admin.component';
import { UserEditAdminComponent } from './component/application/user/routed/admin/UserEditAdmin/user-edit-admin/user-edit-admin.component';
import { UserNewAdminComponent } from './component/application/user/routed/admin/UserNewAdmin/user-new-admin/user-new-admin.component';
import { UserViewAdminComponent } from './component/application/user/routed/admin/user-view-admin/user-view-admin.component';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { MenuComponent } from './component/shared/routed/menu/menu.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { UsuarioFinderComponent } from './component/shared/unrouted/usuario-finder/usuario-finder.component';
import { TipousuarioFinderComponent } from './component/shared/unrouted/tipousuario-finder/tipousuario-finder.component';
@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    AppComponent,
    UserPlistAdminComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    PaginationUnroutedComponent,
    UserViewAdminComponent,
    UserNewAdminComponent,
    UserEditAdminComponent,
    UserRemoveAdminComponent,
    UserDetailAdminUnroutedComponent,
    LoginComponent,
    LogoutComponent,
    UsuarioFinderComponent,
    TipousuarioFinderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    PaginationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
