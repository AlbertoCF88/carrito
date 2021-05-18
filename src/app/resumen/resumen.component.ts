import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(
    private ruta:ActivatedRoute
  ) { 
    this.ruta.params.subscribe(params=>{
      console.log(params['cursoId'])
    })
  }

  ngOnInit(): void {
  }

}
