import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

 const router:Routes=[
  {path:'lista-clientes',component:ListClientesComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
  declarations: [],

  
})
export class AppRoutingModule { }
