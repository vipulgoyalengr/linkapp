import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AddpageComponent} from './addpage/addpage.component';
import {PreviewComponent} from './preview/preview.component';
const route:Routes=[
    {path:'', redirectTo:'login',pathMatch:'full'},
				{path:'login', component:LoginComponent},
				{path:'registers', component: RegisterComponent},
				{path:'preview', component: PreviewComponent},
				{path:'add', component: AddpageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
    				route
    )
  ],
  exports: [
  				RouterModule
  ]
})
export class AppRoutingModule { }
