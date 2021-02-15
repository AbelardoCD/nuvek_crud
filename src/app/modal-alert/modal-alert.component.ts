import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ClienteService } from './../clientes/cliente.service';
import {Router} from '@angular/router'
import { ClientesComponent } from '../clientes/clientes.component';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.css']
})
export class ModalAlertComponent implements OnInit {

  @Input() message:string;
  @Input() idUser:number;

  @Output() onCloseModalAlert:EventEmitter<any> =   new EventEmitter<any>();

  constructor(
    private clienteService: ClienteService,
    private router:Router,
    private clientescomponent:ClientesComponent
  ) { }

  ngOnInit(): void {
  }
  onCloseModal(){
    this.onCloseModalAlert.emit(false);
  }

  delete(){
    this.clienteService.delete(this.idUser).subscribe(
      (res)=>{
        this.onCloseModalAlert.emit(false);
        this.clientescomponent.ngOnInit();

      })

  }
}
