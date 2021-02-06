import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(id: string = '', alt_img: string = ''): string {
    if (!id && !alt_img) {
      return 'assets/no-image.png';
    } else if ((id.includes('dc') || id.includes('marvel')) && !alt_img) {
      return `assets/heroes/${id}.jpg`;
    } else if ((!id.includes('dc') || !id.includes('marvel')) && alt_img) {
      return alt_img;
    } else if (alt_img.includes('http')) {
      return alt_img;
    } else {
      return 'assets/no-image.png';
    }
  }

}
