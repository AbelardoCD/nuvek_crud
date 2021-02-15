import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from '../clientes/cliente.service';
import { User } from '../clientes/users';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input () inputValue    : string;

  flagSaveOrUpdate:string;
  public user:User = new User();

  constructor(
    private clienteService: ClienteService,
    private router:Router,
    private route: ActivatedRoute

  ) {

    this.route.queryParams.subscribe({
      next:(params:any) =>{

        if(params.objeto == undefined){
          this.flagSaveOrUpdate = "save";
        }else{
          console.log(params.objeto);
          this.flagSaveOrUpdate = "updated";

          this.user = JSON.parse(params.objeto);

        }

      }
    })

  }

  ngOnInit(): void {
  }

  save(){
    switch(this.flagSaveOrUpdate){
      case "save":
        this.saveNewUser();
        break;
        case "updated":

        console.log("updated");
        this.updatedUser()
          break;
    }


  }


  saveNewUser(){
    this.user.password = btoa(this.user.password);
    this.clienteService.create(this.user).subscribe(
      (res)=>{
         this.router.navigate(["listar"])
       }
     );
  }

  updatedUser(){
    this.clienteService.updated(this.user).subscribe(
      (res) =>{
        this.router.navigate(["listar"])

      }
    )
  }

  cancelar(){
    this.router.navigate(["listar"])

  }
}





// Define the string
/* var string = 'Hello World!';

// Encode the String
var encodedString = btoa(string);
console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

// Decode the String
var decodedString = atob(encodedString);
console.log(decodedString); // Outputs: "Hello World!" */
