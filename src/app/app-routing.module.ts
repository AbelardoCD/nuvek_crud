import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './form/form.component';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';

const routes: Routes=[
  {path:'listar',component:ClientesComponent},
  {path:'form',component:FormComponent},
  {path:'alert',component:ModalAlertComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
