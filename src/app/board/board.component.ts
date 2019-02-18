import { Component, OnInit, Input, Output } from '@angular/core';
import { Cert } from '../interfaces';
import { ApiService } from '../api.service';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
 
  cert: { certi: Array<Cert>} = {
    certi:[], 
  };

  constructor(private api:ApiService) {

    this.api.getCertificate()
    .then((res:Array<any>)=>{
     const certi = res.map(res=>({
       alias:res.alias,
       cliente: res.cliente,
       email: res.email,
       observ: res.observ,
       vigencia: res.vigencia,
       nserie: res.nserie,
       issue: res.issue,
       subject: res.subject,
       id: res.id,
       name: res.name,
     }));
      Promise.all( certi.map(async(cert: Cert)=>{
        return cert;
      }))
      .then(certi =>{
        this.cert.certi = certi;
        console.log(certi);  
      });
    })
    .catch((error)=>{
      console.log(error);
    });

   }

  //Esto no funciona
  //Buscar la manera en la que sacar los datos del array
  
  
}
