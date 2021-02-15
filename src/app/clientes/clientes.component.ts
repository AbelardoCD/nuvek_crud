import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { User} from './users';
import {Router,ActivatedRoute} from '@angular/router'
import { AppComponent } from '../app.component';
import { element } from 'protractor';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  modalAlert:Boolean;
  message:String;
  users:User[] ;
  idUser:number;
  username:any;
  nameLog:string;
  constructor(
    private clienteService: ClienteService,
    private router:Router,
    private route: ActivatedRoute,
    private appComponent: AppComponent

  ) {


  }

  ngOnInit(): void {
    this.nameLog = sessionStorage.getItem("username")
    this.appComponent.validateUser();
    this.getUsers();

  }

  getUsers(){
    this.clienteService.getUsers().subscribe(
      (res)=>{
         this.users = res;

       }
     );
  }

  openForm(){
    this.router.navigate(['form'])
  }

  delete(user:User){
    this.idUser =user.id;
    this.modalAlert =true;
    this.message = "Estas seguro de eliminar al usuario " + user.username;
  }

  update(user:User){

   let objeto = JSON.stringify(user)
    this.router.navigate(['form'], {
      queryParams: {objeto},
      skipLocationChange: true
    });
  }
}
