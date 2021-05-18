import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatefulComponent } from './stateful/stateful.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ErrorRutaComponent } from './error-ruta/error-ruta.component';
import { FormualriosegundoComponent } from './formualriosegundo/formualriosegundo.component';

const routes: Routes = [
  { path: 'cursos', component: StatefulComponent },
  { path: 'Resumen/Compra', component: ResumenComponent },
  { path: 'registro', component: FormualriosegundoComponent},
  { path: '', component: StatefulComponent, pathMatch: 'full' },
  { path: '**', component:ErrorRutaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
