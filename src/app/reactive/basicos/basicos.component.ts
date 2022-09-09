import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  // public miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl(),
  //   precio: new FormControl(),
  //   existencias: new FormControl()
  // });

  public miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(1)]],
    existencias: [, [Validators.required, Validators.min(0)]]
  })

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.miFormulario.reset({
        nombre: 'Producto por defecto',
        precio: 1500
      })
  }

  public campoValido(campo: string) {
    return (this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched)
  }

  public guardar() {
    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
