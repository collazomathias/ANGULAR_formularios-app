import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent implements OnInit {

  public miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)], ],
    favoritos: this.formBuilder.array([], [Validators.required]),
  })

  public nuevoFavorito: FormControl = this.formBuilder.control('', [Validators.required, Validators.minLength(3)]);

  public get favoritosArray() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public campoValido(campo: string) {
    return (this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched)
  }

  public favoritoValido() {
    return (this.nuevoFavorito.value?.length < 3 && this.nuevoFavorito.touched)
  }

  public agregarFavorito() {
    if(this.nuevoFavorito.invalid) {
      this.nuevoFavorito.markAllAsTouched();
      return;
    }
    this.favoritosArray.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  public guardar() {
    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  public borrar(index: number) {
    this.favoritosArray.removeAt(index);
  }

}
