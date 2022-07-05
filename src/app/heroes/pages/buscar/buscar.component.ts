import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent {
  heroes: Heroe[] = [];
  termino: string = '';
  heoreSelecionado!: Heroe |undefined ;
  constructor(private heoresService: HeroesService) {}
  buscando() {
    this.heoresService
      .getSugerencias(this.termino.trim())
      .subscribe((heores) => (this.heroes = heores));
  }
  opcionSelecionada(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heoreSelecionado = undefined;
      return;
    }

    const heore: Heroe = event.option.value;
    this.termino = heore.superhero;

    this.heoresService
      .getHeroesId(heore.id!)
      .subscribe((heore) => (this.heoreSelecionado = heore));
  }
}
