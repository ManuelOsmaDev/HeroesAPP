import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrosComponent } from './pages/registros/registros.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'registros',
        component:RegistrosComponent
      },
      {
        path:'**',
        component:LoginComponent
      }

    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
