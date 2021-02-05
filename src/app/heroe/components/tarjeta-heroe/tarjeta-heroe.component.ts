import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-tarjeta-heroe',
  templateUrl: './tarjeta-heroe.component.html',
  styleUrls: ['./tarjeta-heroe.component.css']
})
export class TarjetaHeroeComponent implements OnInit {

  @Input('item') heroe!:Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}
