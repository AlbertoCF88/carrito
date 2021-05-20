import { ChangeDetection } from '@angular/cli/lib/config/schema';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interface/product';
//ChangeDetectionStrategy -> mejorar rendimiento 
@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush//onPush -> para una mejor eficacia interna de los cambios que produce los botones
})
export class StatelessComponent implements OnInit {
  @Input() product: Product;//usar algo producto de la hota html stataless
  @Output() cursomatriculado: EventEmitter<Product> = new EventEmitter();//evento que recogene componenete padre stateful
  @Output()  cambioColorPadre = new EventEmitter<boolean>();//cambio color precio final padre

  //lo de public o private para opcional
  public matricula: string;//es como una variable global para que puede ser llamado por otra hoja or el ejemplo por la hoja html
  private disable: boolean;//private es como una varible local(no salgas de esta hoja)
 
  constructor() { 

  }

  ngOnInit(): void {
    this.matricula = 'Matricularse';//cuando este componente se inicia pone en texto matricularse luego cambiara el texto
   
  }
  matricularse() {
    this.disable = true;//clica entoes es true
    this.matricula = '¡Matriculado!';//cuando clicas cambiar el texto
    this.cursomatriculado.emit(this.product);//el padre recibe el evento para mostar el carrito lo sellecionado
  }
  isdisabled() {
    console.log(this.product.title);
    return !!this.disable;//desabilita el boton para que solo puedas darle una vez
  }

mensaje(){
  alert('¿Te vas a descargar la imagen?');
}

//cambiar precio final color padre
FunCambioColor() {
this.cambioColorPadre.emit(true)
console.log(`color ${this.cambioColorPadre}`)
}

}
