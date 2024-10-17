import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { RouterLink } from '@angular/router';
import { ClienteService } from '../clientes/servicios/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  
  clientes: Cliente[]=[];

  constructor(private objClienteService: ClienteService) {}
  
  
}

 
