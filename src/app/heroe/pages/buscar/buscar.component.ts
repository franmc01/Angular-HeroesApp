import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../models/heroe.model';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent{

  termino: string = '';
  listadoHeroes: Heroe[]=[];
  heroeBuscado!: Heroe | undefined;

  constructor(private heroeService: HeroeService) { }

  buscando() {
    this.heroeService.searchHeroe(this.termino.trim()).subscribe(data => {
      this.listadoHeroes = data;
    });
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if(!event.option.value) {
      this.heroeBuscado = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
    this.heroeService.getHeroeById(heroe.id!).subscribe(resp => {
      this.heroeBuscado = resp;
    })
  }

}
