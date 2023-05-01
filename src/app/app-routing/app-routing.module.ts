import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';


import { ListClientesComponent } from '../clientes/list-clientes/list-clientes.component';
import { AddClientesComponent } from './../clientes/add-clientes/add-clientes.component';



const AppRoutes:Routes=[
  {path:"lista-clientes", component: ListClientesComponent},
  {path:"crear-clientes",component: AddClientesComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
