import { Component, OnInit,ViewChild, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';

import { HttpClient, HttpResponse } from '@angular/common/http';
//importar tambien en app.module
import { Subscription } from 'rxjs';
import { style } from '@angular/animations';
//Subscription para manejar (assets)curos.jason como un objeto y sea mas facil de llamar
//ahora los cursos van a ser llamdos desde un http externo


@Component({
 selector: 'app-stateful',
 templateUrl: './stateful.component.html',
 styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit, OnDestroy {//clase integrada con onInit y onDestroy

@ViewChild(ConfirmComponent, {static: false}) confirmchild:ConfirmComponent;
@ViewChild ("CambioColor") CambioColor: ElementRef;

//  shopModel: Shop = new Shop();
  errorHttp:boolean;
  shopModel:any;
  boughtItems: Array<Product>;
  cambioColorPadre: boolean;//precio final en rojo viene del hijo

  private shopSubscription: Subscription; //private de forma loca/shopSubcription viene referenciada de import Subcription  

 constructor(private http: HttpClient, private ren: Renderer2) {
   this.boughtItems = [];
   this.shopModel ={shopItems: []};
   this.cambioColorPadre=false
   //ahora los cursos sale de assets cursos.jason y no de models shop.models
  }

  ngOnInit(): void {
    this.shopSubscription = this.http.get('assets/cursos.json').subscribe(
      (respuesta: Response) => { this.shopModel.shopItems  = respuesta; },
      (respuesta: Response) => { this.errorHttp  = true; }
    );

      this.onGlobalKeyboard();

   }
   ngOnDestroy(): void {
    this.shopSubscription.unsubscribe();//me desuscribo de shopSbcrption para mejorar rendimiento
    document.removeEventListener('click', this.onGlobalKeyboard)
  }



 clickItem(_curso: Product) {
   this.boughtItems.push(_curso);//al clicar mete el curso ene l carritod e la compra
 }
 eliminarCurso(_curso){
  this.boughtItems.splice(_curso,1);
 }
 cursoMatriculado(_event: Product){
   this.clickItem(_event);//viene del html y a suvez del stateless
   this.onConfirm(); //muestra alert de metodo onconfimr mas abajo 
   this.confirmchild.isDisabled=false; //controlar el boton de confirm sin pasar por la vista
  }

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
 //el método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
 /*
La función reductora recibe cuatro argumentos:

Acumulador (acc)
Valor Actual (cur)
Índice Actual (idx)
Array (src)
El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante.

Sintaxis
arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])*/

onConfirm() {
  alert('Has añadido un nuevo curso');
  }


 finalPrice() {
   if (this.boughtItems) {//array con todos los elementos esto se ejecuta solo si this.boughtItems tiene algo que mostar
   return this.boughtItems.reduce(//devuleveme el precio de cada producto mas la suma de cada producto seleccionado
     (prev: number, item: Product) => {
       return prev + item.price;
      }, 0//valor inicial 0
  );
 }
}

onKeyboard(_event){
  console.log(_event);
  if( _event.key === "Enter"){
    alert("INTRO")
  }
}

onGlobalKeyboard() {
  document.addEventListener('click', (eventoGlobal) => {
  console.log("hola, estas clicando por ahi")

  });
  }
//recibir color true del hijo
  FunCambiar(e) {
    this.cambioColorPadre = e;
  }
}
