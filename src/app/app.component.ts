import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'clientes-app';


  username:string;
  constructor(
    private router: Router,
    private route: ActivatedRoute
    )
    {
      this.username = decodeURIComponent(window.location.search.substring(1));
      console.log(this.username);
    }

  ngOnInit(): void {
      if(this.username.split("=")[0] != "user"){
        window.location.href = "http://project-test.epizy.com/";
        //window.location.href = "http://localhost/nuvek_login/";
      }else{
        sessionStorage.setItem("username",this.username.split("=")[1]);
        this.router.navigate(['listar'])
      }
  }


  validateUser(){
      let session = sessionStorage.getItem("username");
      if(session == null || session == undefined || session == "undefined"){
        window.location.href = "http://project-test.epizy.com/";
        //window.location.href = "http://localhost/nuvek_login/";

      }

  }
}
