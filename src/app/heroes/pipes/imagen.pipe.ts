import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from "../interfaces/heroes.interfaces";

@Pipe({
  name:'imagen'
})
export class ImagePipe implements PipeTransform{
  transform(value:Heroe) {
    return `assets/heroes/${value.id}.jpg`
  }
}
