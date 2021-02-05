import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../models/heroe.model';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    let path = `assets/heroes/${heroe.id}.jpg`;
    return path;
  }

}
