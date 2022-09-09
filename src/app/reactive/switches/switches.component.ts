import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {
  public persona = {
    genero: 'Femenino',
    notificaciones: true
  }

  public miFormulario: FormGroup = this.formBuilder.group({
    genero: ['Masculino', [Validators.required]],
    notificaciones: [false, [Validators.required]],
    terminos: [false, [Validators.requiredTrue]]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.miFormulario.reset({...this.persona, terminos: false});

      this.miFormulario.valueChanges.subscribe({ next: ({ terminos, ...resto }) => {
        this.persona = resto;
        console.log(resto);
      }});
  }

  public guardar() {
    const formValue = {...this.miFormulario.value};
    delete formValue.terminos;
    console.log(formValue);
  }
}
