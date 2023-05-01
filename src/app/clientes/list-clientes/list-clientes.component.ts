import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { ApiClientesService } from 'src/app/services/api-clientes.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit{

   listaClientes:Cliente[]=[];
  constructor (private api:ApiClientesService){}

  ngOnInit(): void {
    this.getTodos();
  }
  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      console.log('>>>>>>>>>>>', res);
      this.listaClientes=res.data;
      
    });
  }
}
