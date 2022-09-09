import { Component } from '@angular/core';


interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
    .border {
      padding: 5px;
      text-align: center;
      color: white;
      background-color: lightgray;
      border-radius: 4px;
    }
  `]
})
export class SideMenuComponent {
  public templateMenu: MenuItem[] = [
    { texto: 'Básicos', ruta: './template/basicos' },
    { texto: 'Dinámicos', ruta: './template/dinamicos' },
    { texto: 'Switches', ruta: './template/switches' } 
  ]

  public reactiveMenu: MenuItem[] = [
    { texto: 'Básicos', ruta: './reactive/basicos' },
    { texto: 'Dinámicos', ruta: './reactive/dinamicos' },
    { texto: 'Switches', ruta: './reactive/switches' } 
  ]

  public authMenu: MenuItem[] = [
    { texto: 'Registro', ruta: './auth/registro' },
    { texto: 'Login', ruta: './auth/login' }
  ]
}
