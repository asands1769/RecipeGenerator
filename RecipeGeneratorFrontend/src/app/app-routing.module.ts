import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LogincomponentComponent},
  {path: 'profile', component: UserprofileComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
