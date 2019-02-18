import { Component, OnInit, Input, Output,  } from '@angular/core';

import { Cert } from '../interfaces';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-show-certificate',
  templateUrl: './show-certificate.component.html',
  styleUrls: ['./show-certificate.component.scss'],
  
})
export class ShowCertificateComponent {

@Input() salida: Array<Cert>;

}
