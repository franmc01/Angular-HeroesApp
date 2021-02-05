import { ClassField } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-heroe',
  templateUrl: './ver-heroe.component.html',
  styles: [
  ]
})
export class VerHeroeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
    })
  }

}
