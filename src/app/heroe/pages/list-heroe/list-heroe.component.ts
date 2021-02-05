import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-list-heroe',
  templateUrl: './list-heroe.component.html',
  styles: [
  ]
})
export class ListHeroeComponent implements OnInit {

  listaHeroes:Heroe[] = [];

  constructor(private heroeService:HeroeService) { }

  ngOnInit(): void {
    this.heroeService.getHeroes().subscribe(heroes=>{ this.listaHeroes = heroes; })
  }

}
