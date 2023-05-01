
import { Cliente } from 'src/app/model/Cliente';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiClientesService } from 'src/app/services/api-clientes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-clientes',
  templateUrl: './add-clientes.component.html',
  styleUrls: ['./add-clientes.component.css']
})
export class AddClientesComponent  implements OnInit {
    
    clienteForm=new FormGroup({
      id:new FormControl(''),
      nombres:new FormControl(''),
      apellidos:new FormControl(''),
      correo:new FormControl(''),
      telefono:new FormControl(''),
    });
  constructor(private api:ApiClientesService, private router:Router){}
  ngOnInit(): void{

    }
    addCliente():void{
      let cliente={
        id:this.clienteForm.get('id')?.value,
        nombres:this.clienteForm.get('nombres')?.value,
        apellidos:this.clienteForm.get('apellidos')?.value,
        correo:this.clienteForm.get('correo')?.value,
        telefono:this.clienteForm.get('telefono')?.value

      }
        this.api.crearCliente(cliente).subscribe(resp=>{
          if(resp.status==="ok"){
            alert("Registro exitoso")
            this.router.navigate(['lista-clientes']);
          }
        });
    }
}
