import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-jira-forms',
  templateUrl: './jira-forms.component.html',
  styleUrls: ['./jira-forms.component.scss'],
  
})
export class JiraFormsComponent  implements OnInit{
  username:string;
  password:string;
  url:string;
  proyecto:string;
  componente:string;
  username_id = localStorage.getItem('id');

  error:any;
  valid:any;
  hasJira = false;

  constructor(private api:ApiService) { }
  ngOnInit() {
    this.api.getJira()
    .then(res => {
      console.log(res)
      if(res !== null){
      this.username = res.username;
      this.password = res.password;
      this.url = res.url;
      this.proyecto = res.proyecto;
      this.componente = res.componente;

      this.hasJira=true;
      }
      
    })
    .catch(error =>{
      this.hasJira = false;


    })
  }
  userJira(){
    const {username, password, url, proyecto, componente,username_id} = this;
    console.log(username, password, url, proyecto, componente);
    this.api.Jira(username, password, url, proyecto, componente,username_id)
    .then((res:any) =>{
      console.log(res);
      this.valid = res;
      this.username_id = res.username_id;
      console.log('Registro completado.');
    })
    .catch(error =>{
      this.error = error;
      console.log('Registro no completado');
      
    })
  }


  isJiraTrue(){
    if(this.hasJira === true){
      console.log('hay info');
      
      this.editJira();
    }else{
      console.log(" no hay info");
      
      this.userJira();
    }
  }
  editJira(){
    const {username, password, url, proyecto, componente, username_id} = this;
    console.log(username, password, url, proyecto, componente, username_id);
    this.api.editJira(username, password, url, proyecto, componente, username_id)
    .then(res =>{
      console.log(res);
      this.valid = res;
      console.log('Cambios completados');
      
    })
    .catch(error =>{
      this.error = error;
      console.log('Cambios no completados');
      
    })
    
  }

}
