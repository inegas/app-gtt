import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent {
    username:string;
    password:string;
    error:any;
    valid:any;

  constructor(private api:ApiService, private router:Router) {}

  register(){
    const {username, password} = this;
          console.log(username, password);    
      this.api
      .register(username, password)
      .then(res=>{
        console.log(res);
        
        this.valid = res;
        this.router.navigate(['/login']);
      })
      .catch(error =>{
        console.log(error);
        
        this.error = error;
      });
  }


}
