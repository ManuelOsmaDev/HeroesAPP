import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagePipe implements PipeTransform {
  transform(value: Heroe) {

    if (!value.id && !value.alt_img) {
      return 'assets/no-image.png';
    } else if (value.alt_img) {
      return value.alt_img;
    }else{
      return `assets/heroes/${value.id}.jpg`;
    }

  }
}
