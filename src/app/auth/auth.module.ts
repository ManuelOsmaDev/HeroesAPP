import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrosComponent } from './pages/registros/registros.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrosComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
