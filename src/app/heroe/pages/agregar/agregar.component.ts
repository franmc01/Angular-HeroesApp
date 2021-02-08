import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeroeService } from '../../services/heroe.service';
import { Heroe, Publisher } from '../../models/heroe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

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
  imagen: string = '';
  listaCreadores = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor(
    private heroeService: HeroeService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      this.activatedRoute.params.pipe(
        switchMap(({ id }) => this.heroeService.getHeroeById(id))
      ).subscribe(respHeore => this.heroe = respHeore)
    }
  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      //Update
      this.heroeService.updateHeroe(this.heroe, this.heroe.id)
        .subscribe(resp => this.mostrarSnackbar('Heroe actualizado'));
    } else {
      //Add
      this.heroeService.addHeroe(this.heroe).subscribe(heroe => {
        this.router.navigate(['/hero', heroe.id]);
        this.mostrarSnackbar('Heroe creado');
      });
    }
  }

  detectarCambio(event: any) {
    this.imagen = event.target.value;
    console.log(this.imagen);
    return (this.imagen.length > 0) ? this.heroe.alt_img = this.imagen : this.imagen = '';
  }


  borrarHeroe() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: { ...this.heroe }
    });
    dialog.afterClosed().subscribe(
      (result) => {

        if (result) {
          this.heroeService.deleteHeroe(this.heroe.id!)
            .subscribe(resp => {
              this.router.navigate(['/hero/listado-heroe'])
            });
        }

      }
    )
  }

  mostrarSnackbar(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', { duration: 3000 })
  }

}
