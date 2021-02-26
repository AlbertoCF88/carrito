import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';
//fromGropu Realiza un seguimiento del valores del formulario
//Formbuilder,  no añade funcionalidad nueva, simplemente es una manera de dejar el código más bonito y mantenible.
//Validators: Para validar la información de los campos del formulario, podemos usar las funciones que nos ofrece Angular o implementar las nuestras propias, para ello cambiamos los objetos:

import{ validateURL} from '../validators/url.validators'


@Component({
  selector: 'app-formualriosegundo',
  templateUrl: './formualriosegundo.component.html',
  styleUrls: ['./formualriosegundo.component.css']
})
export class FormualriosegundoComponent implements OnInit {

  formulario:FormGroup; //hace referenica a la importacion de arriba

  patronValidacion="[a-z]*";
  patronContraseña =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/; //sin comillas

  constructor(private formBuilder: FormBuilder) { }
  //https://angular.io/api/forms/Validator    parametros de validaciones
  //https://angular.io/api/forms/Validators
  //https://regex101.com/        web para crear patrones de validaciones
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(4), Validators.pattern(this.patronValidacion)]],
      password: ['', [Validators.required,Validators.pattern(this.patronContraseña)]],
      email: ["",[Validators.required , Validators.email]],//Validators.email ya tiene por defecto que debe incluir @ y .com, .es...
      url: ["", [Validators.required, validateURL]] //creada nueva carpeta fuera de la app
      });
    }


    onSubmit(_formulario){
      console.log(_formulario.value);
    }





}


