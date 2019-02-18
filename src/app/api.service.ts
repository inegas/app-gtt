import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   userId:any = localStorage.getItem('id');
   certId:any = localStorage.getItem('cid');

  constructor(private http: HttpClient) {}

  register(username, password):any {
    const body = {username, password};
    return this.http.post('/api/users', body).toPromise();
  }

  login(username, password){
    const body = {username, password};
    return new Promise((resolve, reject)=>{
      this.http.post('/api/auth', body).toPromise()
      .then((res:any)=>{
        console.log(res);
        this.userId = res.id;
        localStorage.setItem('id',res.id);
        resolve(200);
      })
      .catch((maybeNotAndError)=>{
        console.log(maybeNotAndError);
      });
    });
  }

  Jira(username, password, url, proyecto, componente,username_id){
    const body = {username, password, url, proyecto, componente,username_id};
    return this.http.post('/api/jira', body).toPromise();
  }

  //Mirar en el backend
  editJira(username, password, url, proyecto, componente, username_id):any{
    const body = {username, password, url, proyecto, componente, username_id};
    return this.http.put('/api/jira/' + username_id, body ).toPromise();
  }
  //Mirar en el backend
  getJira():any{
    return this.http.get('/api/jira/' + this.userId).toPromise();
  }

  upCertificate(name, alias, cliente, email, observ){
    const body = {name, alias, cliente, email, observ};
    return this.http.post('/api/Certificate',body).toPromise();
   }

  getCertificate(){
    return this.http.get('/api/Certificate').toPromise();  
  }

}

