import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { VerHeroeComponent } from './pages/ver-heroe/ver-heroe.component';
import { HomeHeroeComponent } from './pages/home-heroe/home-heroe.component';
import { ListHeroeComponent } from './pages/list-heroe/list-heroe.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    VerHeroeComponent,
    HomeHeroeComponent,
    ListHeroeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroeModule { }
