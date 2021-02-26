import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @Input() finalPrice: number ;

  showModal: boolean;//html boton
  isDisabled: boolean;//colocar en el html para descartivar boton
  comprado(){
     alert("¡Comprado!");
     }
  constructor() { 
    this.isDisabled = true;//por defecto boton apagado
    
    
  }

  ngOnInit(): void {
  }

}
