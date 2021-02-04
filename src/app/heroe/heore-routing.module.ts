import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListHeroeComponent } from './pages/list-heroe/list-heroe.component';
import { VerHeroeComponent } from './pages/ver-heroe/ver-heroe.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeHeroeComponent } from './pages/home-heroe/home-heroe.component';

const routes:Routes = [
  {
    path: '',
    component: HomeHeroeComponent,
    children: [
      {
        path: 'listado-heroe',
        component: ListHeroeComponent
      },
      {
        path: 'agregar-heroe',
        component: AgregarComponent
      },
      {
        path: 'editar-heroe/:id',
        component: AgregarComponent
      },
      {
        path: 'buscar-heroe',
        component: BuscarComponent
      },
      {
        path: ':id',
        component: VerHeroeComponent
      },
      {
        path: '**',
        redirectTo:'listado-heroe'
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)

  ],
  exports: [
    RouterModule
  ]
})
export class HeoreRoutingModule { }
