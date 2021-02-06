import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../models/heroe.model';
import { HeroeService } from '../../services/heroe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      borde-radius:5px;
    }
  `]
})
export class AgregarComponent implements OnInit {
  imagen:string= '';
  listaCreadores = [
    {
      id:'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe:Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor(private heroeService: HeroeService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    if(this.router.url.includes('editar')){
      this.activatedRoute.params.pipe(
        switchMap(({id})=>this.heroeService.getHeroeById(id))
      ).subscribe(respHeore => this.heroe = respHeore)
    }
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if(this.heroe.id){
      //Update
      this.heroeService.updateHeroe(this.heroe, this.heroe.id).subscribe();
    }else{
      //Add
      this.heroeService.addHeroe(this.heroe).subscribe(heroe=>{
        this.router.navigate(['/hero', heroe.id])
      });
    }
  }

  cambio(event:any){
    this.imagen= event.target.value;
    console.log(this.imagen);
    return (this.imagen.length > 0) ? this.heroe.alt_img = this.imagen : this.imagen = '';
  }

}
