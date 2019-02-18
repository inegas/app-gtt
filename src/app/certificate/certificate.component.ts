import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cert } from '../interfaces';


@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent{

@Input() salida2: Cert;


caducado:boolean;
valid: any;

doneCert(){
    
    if(this.salida2 === this.salida2){
       console.log(this.salida2); 
     }else{
       console.log('error');
     }
  }

  // dowloadFile(certificate: Cert) {

  //   if(this.salida2[5] === this.salida2[5]){

  //     let certificateType = certificate.name.split('.')[1];

  //   var contentType = "file/"+certificateType;
  //   var byteCharacters = atob(certificate.name);
  //   var byteNumbers = new Array(byteCharacters.length);
  //   for (var i = 0; i < byteCharacters.length; i++) {
  //     byteNumbers[i] = byteCharacters.charCodeAt(i);
  //   }
  //   var byteArray = new Uint8Array(byteNumbers);
  //   var blob = new Blob([byteArray], {
  //     type: contentType
  //   });
  //   var aux_document = document.createElement("a");
  //   aux_document.href = URL.createObjectURL(blob);
  //   aux_document.download = `${certificate.name}`;
  //   document.body.appendChild(aux_document);
  //   aux_document.click();
  // }
  //   }

    

  constructor(){}
  
}
