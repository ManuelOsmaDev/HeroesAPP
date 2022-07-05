import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,
              private authServices: AuthService
) { }

login(){
  //ir al backend
  this.authServices.login()
  .subscribe(usuario=>{
    if(usuario.id){
      this.router.navigate(["./heroes"])
  }
}
  )
}

}
