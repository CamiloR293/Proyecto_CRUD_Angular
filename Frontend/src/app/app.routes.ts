import { Routes } from '@angular/router';
import { ListarClienteComponent } from './clientes/listar-cliente/listar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './clientes/actualizar-cliente/actualizar-cliente.component';

export const routes: Routes = [
    {path: '', redirectTo: '/clientes/listar-clientes', pathMatch: 'full'},
    {path: 'clientes/listar-clientes', component: ListarClienteComponent},
    {path: 'clientes/crear-cliente', component: CrearClienteComponent},
    {path: 'clientes/actualizar-cliente/:id', component: ActualizarClienteComponent}
];
