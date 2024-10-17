import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nombres: string ='Juan Camilo';
  apellidos: string ='Rodallega Mera';
  disciplina: string ="Soy desarrollador fullstack especialista en node.js y en Experiencia de usuario";
  descripcion: string="Estudiante de ingenieria en sistemas apasionado por el desarrollo BackEnd";

}
