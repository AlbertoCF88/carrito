import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularioprimero',
  templateUrl: './formularioprimero.component.html',
  styleUrls: ['./formularioprimero.component.css']
})
export class FormularioprimeroComponent implements OnInit {

;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(_formularioprimero){
    console.log(_formularioprimero.value);
  }
  // blanco(){
   
  //   this.mensaje ="Rellena los campos"
  // }
}
