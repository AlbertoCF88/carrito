import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../interface/product';
//onchandges para detectar cambios y simplechsanges

@Component({
  selector: 'app-status-cart',
  templateUrl: './status-cart.component.html',
  styleUrls: ['./status-cart.component.css']
})
export class StatusCartComponent implements OnInit, OnChanges {

  @Input() price: number;//monitoriza precio
  @Input() shopModel: Array<Product>;//monitoriza producto
  @Output() add: EventEmitter<null> = new EventEmitter();//
 
  constructor() { }
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  confirm() {
    this.add.emit();//envia evento a statefull
    }



}
