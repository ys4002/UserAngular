import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import { RegistrationComponent } from './registration/registration.component';
import { PreventLogInAccess } from './core/prevent-log-in-access.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [PreventLogInAccess] },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'registration', component: RegistrationComponent, canActivate: [PreventLogInAccess]},
  { path : '', component : LoginComponent, canActivate: [PreventLogInAccess] }
];

export const routing = RouterModule.forRoot(routes);
