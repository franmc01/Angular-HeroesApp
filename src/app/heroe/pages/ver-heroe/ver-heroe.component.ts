import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../models/heroe.model';
import { switchMap } from 'rxjs/operators';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-ver-heroe',
  templateUrl: './ver-heroe.component.html',
  styles: [
  ]
})
export class VerHeroeComponent implements OnInit {

  heroe!:Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroService:HeroeService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
        switchMap((parametro=>this.heroService.getHeroeById(parametro.id)))
    ).subscribe(data=>{
      this.heroe = data;
    })
  }

  regresar(){
    this.router.navigateByUrl('/hero/listado-heroe')
  }

}
