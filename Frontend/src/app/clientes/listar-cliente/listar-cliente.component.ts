import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ClienteService } from '../servicios/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-cliente',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})
export class ListarClienteComponent {
  clientes: Cliente[]=[];

    constructor(private objClienteService: ClienteService, private router: Router) {}
    
    ngOnInit(): void{
      this.objClienteService.getClientes().subscribe
      (
      clientes => {
        // console.log("listando clientes");
        this.clientes = clientes;
      }
      );
    }

    /**
   * @brief Metodo que elimina a un cliente basandose en su id
   * @param cliente cliente a eliminar
   */
  eliminarCliente(cliente: Cliente): void{
    Swal.fire({
      title: '¿Desea eliminar el cliente?',
      text: "La eliminacion no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'  
    }).then((result) => {
      if (result.isConfirmed) {
        this.objClienteService.deleteCliente(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(client => client.id !== cliente.id)
            Swal.fire('Cliente eliminado', `Cliente ${cliente.nombre} eliminado con éxito`, 'success');
          }
        )
      }
    })
  }

  /**
   * @brief Metodo que edita un cliente
   * @param cliente cliente a editar
   */
  editarCliente(cliente: Cliente): void{
    console.log("Editando cliente: ", cliente.id );
    this.router.navigate(['clientes/actualizar-cliente', cliente.id]);
  }


}
