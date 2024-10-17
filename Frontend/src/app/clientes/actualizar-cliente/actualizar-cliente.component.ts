import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../servicios/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cliente',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule, RouterLink],
  templateUrl: './actualizar-cliente.component.html',
  styleUrl: './actualizar-cliente.component.css'
})
export class ActualizarClienteComponent {
  public cliente: Cliente = new Cliente();
  public titulo: String = 'Actualizar cliente';

  constructor(private objClienteService: ClienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const clienteId = this.route.snapshot.paramMap.get('id');
    if (clienteId){
      this.objClienteService.getClienteById(+clienteId).subscribe(
        cliente => {
          this.cliente = cliente;
        });
    }
  }

  public actualizarCliente(){
    console.log("Actualizando cliente");
    this.objClienteService.update(this.cliente).subscribe(
      response => {
        console.log("Cliente actualizado exitosamente");
        console.log(this.cliente);
        this.router.navigate(['clientes/listar-clientes']);
        Swal.fire('Cliente actualizado', `Cliente ${response.nombre} actualizado con éxito!`, 'success');
      },
      error => {
        console.error(error);
        Swal.fire('Error al actualizar', 'Error al actualizar el cliente', 'error');
      }
    )
  }
}
