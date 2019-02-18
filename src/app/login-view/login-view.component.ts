import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
  animations: [
  
]
})
export class LoginViewComponent {
   
  username:string;
  password:string;
  error: any;

  constructor(private router: Router, private api: ApiService ) { }
  
  
  login(){
    const {username, password} = this;
    if(username.trim() !== '' && password.trim() !== ''){
      this.api
      .login(username.trim(), password.trim())
      .then(()=>{
        this.error = undefined;
        this.router.navigate(['/board']);
      })
    }
  }

}
