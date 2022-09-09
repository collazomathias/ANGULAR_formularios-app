import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {
  
  @ViewChild('miFormulario') miFormulario!: NgForm;

  public favorito: string = '';

  public persona: Persona = {
    nombre: '',
    favoritos: []
  }

  public guardar() {
    console.log(this.miFormulario.value);
  }

  public nombreValido() {
    return (this.miFormulario?.controls['nombre']?.invalid && this.miFormulario?.controls['nombre']?.touched)
  }

  public favoritoValido() {
    return (this.miFormulario?.controls['favorito']?.invalid && this.miFormulario?.controls['favorito']?.touched)
  }

  public agregarFavorito() {
    const nuevoFavorito: Favorito = {
      id: Math.random()*1000,
      nombre: this.favorito
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.miFormulario?.controls['favorito'].reset();
  }

  public eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

}
