import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent{

  file;
  valid:any;
  error:any;
  newFile;
  alias:string;
  cliente:string;
  email:string;
  observ:string;



  constructor(public api:ApiService){}

    changeListener($event) : void {
    this.readThisToo(this.alias, this.cliente, this.email, this.observ);
    this.readThis($event.target);
     this.api.upCertificate(this.newFile, this.alias, this.cliente, this.email, this.observ)
     .then((res)=>{
       console.log(res);
       this.valid = res;
     })
     .catch((error)=>{
       console.log(error);
       this.error = error;
     })
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      
      this.file = myReader.result;
       this.newFile = (this.file.replace("data:application/x-pkcs12;base64,",""));
       //this.newFile = (this.file.split(","));
      console.log(this.newFile);
    }
    
    myReader.readAsDataURL(file);
    console.log(file);
    
  }

  readThisToo(alias, cliente, email, observ){
    console.log(alias, cliente, email, observ);
    this.alias = alias;
    this.cliente = cliente;
    this.email = email;
    this.observ = observ;

  }

}
