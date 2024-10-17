import { Component } from '@angular/core';
import { Cliente } from '../cliente'; 
import { ClienteService } from '../servicios/cliente.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,RouterLink],
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css'
})
export class CrearClienteComponent {
  public cliente: Cliente = new Cliente();
  public titulo: String = 'Crear cliente';

  constructor(private clienteService: ClienteService, private router:Router) { }

  ngOnInit(): void {
  }

  public crearCliente()
  {
    console.log("Creando cliente");
    this.clienteService.create(this.cliente).subscribe(
      respose => 
      {
        console.log("Cliente creado exitosamente");
        console.log(this.cliente);
        this.router.navigate(['clientes/listar-clientes']),
        Swal.fire('Nuevo cliente',`Cliente ${respose.nombre} creado con éxito!`, 'success');
     }

    )
      
  }

  public actionVolver(){
    console.log("Volver a la lista de clientes");
    this.router.navigate(['clientes/listar-clientes']);
  }

}
